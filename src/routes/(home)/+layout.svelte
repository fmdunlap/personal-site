<script>
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
</script>

<Header />
<div class="flex min-h-screen w-full flex-col bg-zinc-300">
	<div class="mx-4 flex flex-col gap-y-8 md:mx-auto md:w-10/12 lg:w-4/5 xl:w-9/12">
		<slot />
	</div>
	<div class="flex-grow" />
	<Footer />
</div>
