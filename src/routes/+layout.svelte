<script>
	import '../app.css';
	import capitalize from 'capitalize';
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { segmentize } from '$lib/UrlLib';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	$: pageSegments = segmentize($page.url.toString());
	// @ts-ignore
	$: pageTitle = 'FDIV' + (pageSegments.length > 1 ? ' - ' + capitalize(pageSegments.at(-1)) : '');
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<!-- Google Analytics -->
	{#if !dev}
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-YB2VVTMFKW"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-YB2VVTMFKW');
		</script>
	{/if}
</svelte:head>

<slot />
