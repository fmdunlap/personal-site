<script lang="ts">
	export let src: string;
	export let alt: string;
	export let caption: string = '';
	export let extras: string = '';
</script>

<div class="mx-8 my-4 flex flex-col">
	<img {src} {alt} class="mx-auto {extras}" />
	{#if caption}
		<span class="mx-auto mt-2 italic">
			{caption}
		</span>
	{/if}
</div>
