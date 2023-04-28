import nodemailer from 'nodemailer';

const MY_EMAIL = 'forrestmdunlap@gmail.com';

function validateEmail(email: string | null): RegExpMatchArray | null {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
		);
}

function fieldValueNull(value: any): boolean {
	return value == null || value == undefined || value == '';
}

function validateForm(data: { [key: string]: string }): { [key: string]: string } {
	const errors: { [key: string]: string } = {};

	if (fieldValueNull(data['email'])) {
		errors['email'] = 'Please enter an email address';
	}
	if (fieldValueNull(data['subject'])) {
		errors['subject'] = 'Please enter a subject line';
	}
	if (fieldValueNull(data['message'])) {
		errors['message'] = 'Please say something?!';
	}

	if (!Object.keys(errors).includes('email') && !validateEmail(data['email'])) {
		errors['email'] = 'Email address is invalid.';
	}

	return errors;
}

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const data: { [key: string]: string } = {};
		for (const field of formData) {
			const [key, value] = field;
			data[key] = value.toString();
		}

		const errors = validateForm(data);

		if (Object.keys(errors).length > 0) {
			return { success: false, errors: errors, data: data };
		}

		const transporter = nodemailer.createTransport({
			host: 'mail.fdunlap.com',
			port: 465,
			secure: true,
			auth: { user: 'contact@fdunlap.com', pass: 'nu5XgPZ5Nd5Zzee' }
		});

		const info = await transporter.sendMail({
			from: `"AutoContactEmailer" <contact@fdunlap.com>`,
			to: MY_EMAIL + ', forrest@fdunlap.com',
			subject: '[CONTACT EMAIL]: ' + data['subject'],
			text: 'FROM: ' + data['email'] + '\n\n' + 'CONTENT: \n\n' + data['message']
		});

		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

		return { success: true };
	}
};
