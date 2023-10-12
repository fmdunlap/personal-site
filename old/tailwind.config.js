/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			code: ['Space Mono', 'monospace'],
			landing: ['Mulish', 'sans-serif']
		},
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
