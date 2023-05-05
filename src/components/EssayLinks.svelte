<script lang="ts">
	import Card from './Card.svelte';
	import { essays } from '../essays/EssayManager';
</script>

<Card direction="col" extras="basis-1/3 xl:p-8">
	<p class="text-start text-2xl font-bold xl:text-3xl">Essays</p>
	<ul class="list-disc list-inside">
		{#each essays as essay}
			<li class="mb-1 mt-1">
				<a class="underline decoration-sky-600 decoration-2 text-slate-800 text-md xl:text-xl hover:text-slate-900 hover:decoration-sky-400" href="/essays/{essay.slug}">{essay.title}</a>
			</li>
		{/each}
	</ul>
</Card>
