<script>
	import { page } from '$app/stores';
	import { segmentize } from '$lib/UrlLib';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import capitalize from 'capitalize';
	import '../app.css';

	inject({ mode: dev ? 'development' : 'production' });

	$: pageSegments = segmentize($page.url.toString());
	// @ts-ignore
	$: pageTitle = 'FDIV' + (pageSegments.length > 1 ? ' - ' + capitalize(pageSegments.at(-1)) : '');
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<slot />
