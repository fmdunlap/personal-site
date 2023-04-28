<script lang="ts">
	import { page } from '$app/stores';
	$: homeSelected = $page.route.id?.substring(1) == '';
	$: faqSelected = $page.route.id?.substring(1) == 'faq';
	$: contactSelected = $page.route.id?.substring(1) == 'contact';
	$: projectsSelected = $page.route.id?.substring(1) == 'projects';

	const selectedStyle = 'font-bold';
</script>

<div class="flex flex-col">
	<div class="flex w-auto flex-row bg-gray-50 text-2xl">
		<div class="flex-0 px-2 py-1 hover:bg-slate-300 {homeSelected ? selectedStyle : ''}">
			<a href="/">Home</a>
		</div>
		<div class="flex-0 px-2 py-1 hover:bg-slate-300 {contactSelected ? selectedStyle : ''}">
			<a href="/contact">Contact</a>
		</div>
		<div class="flex-0 px-2 py-1 hover:bg-slate-300 {projectsSelected ? selectedStyle : ''}">
			<a href="/projects">Projects</a>
		</div>
		<div class="flex-0 px-2 py-1 hover:bg-slate-300 {faqSelected ? selectedStyle : ''}">
			<a href="/faq">FAQ</a>
		</div>
		<div class="flex-grow" />
		<div
			class="flex-0 mx-2 h-auto w-36 select-none self-center hover:cursor-default hover:fill-blue-500"
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
	</div>
	<hr class="h-1 bg-gray-100" />
</div>
