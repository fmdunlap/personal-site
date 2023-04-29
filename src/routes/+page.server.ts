import nodemailer from 'nodemailer';
import EmailValidator from 'email-validator';
import Capitalize from 'capitalize';
import { SMTP_EMAIL, SMTP_HOST, SMTP_PASSWORD } from '$env/static/private';

type ValidationResult = { success: false; error: string } | { success: true };
type Validator = (value: string) => ValidationResult;

const MY_EMAIL = 'forrestmdunlap@gmail.com';
const SMTP_TRANSPORT = nodemailer.createTransport({
	host: SMTP_HOST,
	port: 465,
	secure: true,
	auth: { user: SMTP_EMAIL, pass: SMTP_PASSWORD }
});

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
