import nodemailer from "nodemailer";
import EmailValidator from "email-validator";
import Capitalize from "capitalize";
import { google } from "googleapis";
const SMTP_HOST = "mail.fdunlap.com";
const SMTP_EMAIL = "contact@fdunlap.com";
const SMTP_PASSWORD = "nu5XgPZ5Nd5Zzee";
const YOUTUBE_API_KEY = "AIzaSyDFPLksRHbZEJEgPmzafThiKvVWrePTnvE";
const MY_EMAIL = "forrestmdunlap@gmail.com";
const SMTP_TRANSPORT = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 465,
  secure: true,
  auth: { user: SMTP_EMAIL, pass: SMTP_PASSWORD }
});
const THUMBNAIL_MISSING_URL = "https://placekitten.com/300/200";
const dry_run_videos = {
  gallery: {
    videos: [
      {
        title: "TV 1",
        description: "This is a test video.",
        id: "dQw4w9WgXcQ",
        thumbnail: THUMBNAIL_MISSING_URL
      },
      {
        title: "TV 2",
        description: "This is a test video.",
        id: "dQw4w9WgXcQ",
        thumbnail: THUMBNAIL_MISSING_URL
      },
      {
        title: "TV 3",
        description: "This is a test video.",
        id: "dQw4w9WgXcQ",
        thumbnail: THUMBNAIL_MISSING_URL
      },
      {
        title: "TV 4",
        description: "This is a test video.",
        id: "dQw4w9WgXcQ",
        thumbnail: THUMBNAIL_MISSING_URL
      },
      {
        title: "TV 5",
        description: "This is a test video.",
        id: "dQw4w9WgXcQ",
        thumbnail: THUMBNAIL_MISSING_URL
      }
    ]
  }
};
function validateField(field, value) {
  if (value == null || value == void 0 || value == "" || value.trim() == "") {
    return { success: false, error: `${Capitalize(field)} is required.` };
  }
  if (validators[field]) {
    return validators[field](value);
  }
  return validators["default"](value);
}
const validators = {
  email: (value) => {
    if (!EmailValidator.validate(value)) {
      return { success: false, error: "Invalid email address." };
    }
    return { success: true };
  },
  default: () => {
    return { success: true };
  }
};
const actions = {
  contact: async (event) => {
    const formData = await event.request.formData();
    const data = {};
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
      return { success: false, errors, data };
    }
    await SMTP_TRANSPORT.sendMail({
      from: `"AutoContactEmailer" <contact@fdunlap.com>`,
      to: MY_EMAIL + ", forrest@fdunlap.com",
      subject: "[CONTACT EMAIL]: " + data["subject"],
      text: "FROM: " + data["email"] + "\n\nCONTENT: \n\n" + data["message"]
    });
    return { success: true };
  }
};
google.youtube({
  version: "v3",
  auth: YOUTUBE_API_KEY
});
async function load() {
  {
    console.log("DRY RUN");
    return dry_run_videos;
  }
}
export {
  actions,
  load
};
