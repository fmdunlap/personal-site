<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Header from '../components/Header.svelte';
	import { page } from '$app/stores';
	import { segmentize } from '../lib/UrlLib';
	import capitalize from 'capitalize';

	inject({ mode: dev ? 'development' : 'production' });

	$: pageSegments = segmentize($page.url.toString());
	// @ts-ignore
	$: pageTitle = 'FDIV' + (pageSegments.length > 1 ? ' - ' + capitalize(pageSegments.at(-1)) : '');
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>
<Header />
<div class="flex min-h-screen w-full flex-col bg-zinc-300">
	<div class="mx-4 flex flex-col gap-y-8 md:mx-auto md:w-10/12 lg:w-4/5 xl:w-9/12">
		<slot />
	</div>
	<div class="flex-grow" />
	<Footer />
</div>
