/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				twitterLogo: "url('$images/twitter.svg')",
				youtubeLogo: "url('$images/youtube.svg')",
				instagramLogo: "url('$images/instagram.svg')"
			}
		}
	},
	plugins: []
};
