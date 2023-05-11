<script lang="ts">
	export let numbered: boolean = false;
</script>

{#if numbered}
	<ol class="group mx-8 list-outside list-decimal px-8">
		<slot />
	</ol>
{:else}
	<ul class="group mx-8 list-outside list-disc lg:px-8">
		<slot />
	</ul>
{/if}
