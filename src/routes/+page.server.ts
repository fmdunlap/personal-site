import nodemailer from 'nodemailer';
import EmailValidator from 'email-validator';
import Capitalize from 'capitalize';
import { google } from 'googleapis';
import {
	DRY_RUN,
	SMTP_EMAIL,
	SMTP_HOST,
	SMTP_PASSWORD,
	YOUTUBE_API_KEY
} from '$env/static/private';

type ValidationResult = { success: false; error: string } | { success: true };
type Validator = (value: string) => ValidationResult;

const CHANNEL_UPLOADS_PLAYLIST_ID = 'UUOB_8z9-At9wt4X-EZQOQVQ';
const MY_EMAIL = 'forrestmdunlap@gmail.com';
const SMTP_TRANSPORT = nodemailer.createTransport({
	host: SMTP_HOST,
	port: 465,
	secure: true,
	auth: { user: SMTP_EMAIL, pass: SMTP_PASSWORD }
});
const THUMBNAIL_MISSING_URL = 'https://placekitten.com/300/200';
const dry_run_videos = {
	gallery: {
		videos: [
			{
				title: 'TV 1',
				description: 'This is a test video.',
				id: 'dQw4w9WgXcQ',
				thumbnail: THUMBNAIL_MISSING_URL
			},
			{
				title: 'TV 2',
				description: 'This is a test video.',
				id: 'dQw4w9WgXcQ',
				thumbnail: THUMBNAIL_MISSING_URL
			},
			{
				title: 'TV 3',
				description: 'This is a test video.',
				id: 'dQw4w9WgXcQ',
				thumbnail: THUMBNAIL_MISSING_URL
			},
			{
				title: 'TV 4',
				description: 'This is a test video.',
				id: 'dQw4w9WgXcQ',
				thumbnail: THUMBNAIL_MISSING_URL
			},
			{
				title: 'TV 5',
				description: 'This is a test video.',
				id: 'dQw4w9WgXcQ',
				thumbnail: THUMBNAIL_MISSING_URL
			}
		]
	}
};

function validateField(field: string, value: string): ValidationResult {
	if (value == null || value == undefined || value == '' || value.trim() == '') {
		return { success: false, error: `${Capitalize(field)} is required.` };
	}
	if (validators[field]) {
		return validators[field](value);
	}
	return validators['default'](value);
}

const validators: { [key: string]: Validator } = {
	email: (value: string) => {
		if (!EmailValidator.validate(value)) {
			return { success: false, error: 'Invalid email address.' };
		}
		return { success: true };
	},
	default: () => {
		return { success: true };
	}
};

export const actions = {
	contact: async (event) => {
		const formData = await event.request.formData();
		const data: { [key: string]: string } = {};
		for (const field of formData) {
			const [key, value] = field;
			data[key] = value.toString();
		}

		const errors = {};
		Object.keys(data).forEach((key) => {
			const validationResult = validateField(key, data[key]);
			if (!validationResult.success) {
				Object.assign(errors, { [key]: validationResult.error });
			}
		});

		if (Object.keys(errors).length > 0) {
			return { success: false, errors: errors, data: data };
		}

		await SMTP_TRANSPORT.sendMail({
			from: `"AutoContactEmailer" <contact@fdunlap.com>`,
			to: MY_EMAIL + ', forrest@fdunlap.com',
			subject: '[CONTACT EMAIL]: ' + data['subject'],
			text: 'FROM: ' + data['email'] + '\n\n' + 'CONTENT: \n\n' + data['message']
		});

		return { success: true };
	}
};

const youtube = google.youtube({
	version: 'v3',
	auth: YOUTUBE_API_KEY
});

export async function load() {
	if (DRY_RUN == 'TRUE') {
		console.log('DRY RUN');
		return dry_run_videos;
	}

	const uploadsPlaylistItems = await youtube.playlistItems.list({
		playlistId: CHANNEL_UPLOADS_PLAYLIST_ID,
		part: ['snippet,contentDetails'],
		maxResults: 9
	});

	const videos = uploadsPlaylistItems?.data?.items?.map((item) => {
		const snippet = item.snippet;

		if (!snippet) {
			return {
				title: 'No title',
				description: 'No description',
				id: 'dQw4w9WgXcQ',
				thumbnail: THUMBNAIL_MISSING_URL
			};
		}

		return {
			title: snippet.title ?? 'Missing Title',
			description: snippet.description ?? 'Missing Description',
			id: item.contentDetails?.videoId ?? 'dQw4w9WgXcQ',
			thumbnail:
				snippet.thumbnails?.standard?.url ??
				snippet.thumbnails?.medium?.url ??
				THUMBNAIL_MISSING_URL
		};
	});

	return { gallery: { videos: videos } };
}
