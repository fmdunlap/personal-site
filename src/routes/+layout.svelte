<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="flex min-h-screen flex-col bg-zinc-300">
	<Header />
	<slot />
	<div class="flex-grow" />
	<Footer />
</div>
