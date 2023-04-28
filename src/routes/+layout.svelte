<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="flex min-h-screen flex-col bg-zinc-300">
	<div
		class="flex-0 mb-4 mt-2 h-auto w-44 select-none self-center hover:cursor-default hover:fill-gray-500"
	>
		<svg viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg">
			<style>
				.heavy {
					font: bold 20px monospace;
				}
			</style>
			<text x="0" y="20" class="heavy">&lt; FDIV /&gt;</text>
		</svg>
	</div>
	<slot />
	<div class="flex-grow" />
	<Footer />
</div>
