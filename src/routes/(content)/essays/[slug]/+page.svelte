<script lang="ts">
	import { page } from '$app/stores';
	import { getEssay } from '$lib/essay/EssayManager';

	const slug = $page.params['slug'];
</script>

{#if getEssay(slug) != null}
	<svelte:component this={getEssay(slug)?.component} />
{:else}
	<p>Essay "{slug}" not found.</p>
{/if}
