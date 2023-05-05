<script lang="ts">
	import { page } from '$app/stores';
	import capitalize from 'capitalize';
	import Card from '../../components/Card.svelte';

	$: segments = $page.route['id']?.split('/').filter((segment) => segment != '').map((segment) => {
        let title = segment == '[slug]' ? $page.params['slug'] : segment;
        return title;
    });

	$: currentPage = segments?.at(-1);

    function prettySegment(segment: string) {
        return capitalize(segment.replaceAll('-', ' '));
    }
</script>

<Card wipeSizes padding="p-4" extras="xl:mt-4">
	<div class="flex flex-row gap-x-3">
		{#if segments}
			<a href="/" class="hover:fill-sky-700">Home</a>
			{#each segments as segment}
				<p>&gt;</p>
				<a href="/{segment}" class={segment == currentPage ? 'font-bold' : ''}
					>{prettySegment(segment)}</a
				>
			{/each}
		{/if}
	</div>
</Card>
<slot />
