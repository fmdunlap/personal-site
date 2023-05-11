<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="sticky top-0 z-50 bg-zinc-300 xl:h-0">
	<div
		class="mx-auto h-auto w-32 select-none self-center pt-2 xl:fixed xl:left-8 xl:top-6 xl:mx-0 xl:pt-0"
	>
		{#if $page.route.id == '/'}
			<svg viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg">
				<style>
					.heavy {
						font: bold 20px monospace;
					}
				</style>
				<text x="0" y="20" class="heavy">&lt; FDIV /&gt;</text>
			</svg>
		{:else}
			<a href="/" class="hover:fill-sky-700">
				<svg viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg">
					<style>
						.heavy {
							font: bold 20px monospace;
						}
					</style>
					<text x="0" y="20" class="heavy">&lt; FDIV /&gt;</text>
				</svg>
			</a>
		{/if}
	</div>
</div>
