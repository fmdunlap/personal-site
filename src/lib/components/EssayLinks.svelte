<script lang="ts">
	import Card from './Card.svelte';
	import { essays } from '$lib/essay/EssayManager';
</script>

<Card direction="col" extras="basis-1/3 xl:p-8">
	<p class="text-start text-2xl font-bold xl:text-3xl">Essays</p>
	<ul class="list-inside list-disc">
		{#each essays as essay}
			<li class="mb-1 mt-1">
				<a
					class="text-md text-slate-800 underline decoration-sky-600 decoration-2 hover:text-slate-900 hover:decoration-sky-400 xl:text-xl"
					href="/essays/{essay.slug}">{essay.title}</a
				>
			</li>
		{/each}
	</ul>
</Card>
