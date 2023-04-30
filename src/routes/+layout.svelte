<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import HeaderLogo from '../components/HeaderLogo.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="flex min-h-screen w-full flex-col bg-zinc-300">
	<HeaderLogo />
	<div class="mx-4 flex flex-col gap-y-8 md:mx-auto md:w-10/12 lg:w-4/5 xl:mt-8 xl:w-9/12">
		<slot />
	</div>
	<div class="flex-grow" />
	<Footer />
</div>
