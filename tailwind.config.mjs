/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				code: ['Space Mono', 'monospace'],
				landing: ['Mulish', 'sans-serif']
			},
			backgroundImage: {
				twitterLogo: "url('images/twitter.svg')",
				youtubeLogo: "url('images/youtube.svg')",
				instagramLogo: "url('images/instagram.svg')"
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
