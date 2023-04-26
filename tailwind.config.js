/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				twitterLogo: "url('/src/images/twitter.svg')",
				youtubeLogo: "url('/src/images/youtube.svg')",
				instagramLogo: "url('/src/images/instagram.svg')"
			}
		}
	},
	plugins: []
};
