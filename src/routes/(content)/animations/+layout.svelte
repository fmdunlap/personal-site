<script lang="ts">
	const animations = [{ name: 'Coincidence', path: '/animations/coincidence' }];
</script>

<div class="min-w-screen min-h-screen bg-gray-700 text-white">
	<div class="flex flex-row border-b border-white">
		{#each animations as animation}
			<a href={animation.path} class="p-2 hover:bg-gray-600">{animation.name}</a>
		{/each}
	</div>
	<slot />
</div>
