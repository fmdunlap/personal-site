<script lang="ts">
	import capitalize from 'capitalize';
	import Card from './Card.svelte';
	import { segmentize } from '$lib/UrlLib';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	$: segments = [''];

	$: currentPage = segments?.at(-1);

	onMount(() => {
		segments = segmentize(document.URL.toString()).slice(1);
	});

	afterNavigate(() => {
		segments = segmentize(document.URL.toString()).slice(1);
	});

	function prettySegment(segment: string) {
		return capitalize(segment.replaceAll('-', ' '));
	}
</script>

{#if segments}
	<Card wipeSizes direction="row" padding="p-4" extras="mt-2 xl:mt-4">
		<div class="flex flex-row gap-x-3">
			<a href="/" class="hover:text-sky-700">Home</a>
			{#each segments as segment}
				<p>&gt;</p>
				<a href="/{segment}" class="{segment == currentPage ? 'font-bold' : ''} hover:text-sky-700"
					>{prettySegment(segment)}</a
				>
			{/each}
		</div>
	</Card>
{/if}
