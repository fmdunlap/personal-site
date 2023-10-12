<script lang="ts">
	import { essays } from '$lib/EssayManager';

	export let textColor = 'text-slate-100';
	export let underlineColor = 'decoration-sky-300';
	export let textHoverColor = 'hover:text-slate-300';
	export let underlineHoverColor = 'hover:decoration-sky-400';
</script>

<ul class="list-inside list-none">
	{#each essays as essay}
		<li class="mb-1 mt-1">
			<a
				class={'text-md underline decoration-2 xl:text-xl ' +
					underlineColor +
					' ' +
					textColor +
					' ' +
					textHoverColor +
					' ' +
					underlineHoverColor}
				href="/essays/{essay.slug}">{essay.title}</a
			>
		</li>
	{/each}
</ul>
