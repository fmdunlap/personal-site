<script lang="ts">
	import { animations } from './animations';
</script>

<div
	class="min-w-screen min-h-screen text-white"
	style="background: linear-gradient(135deg, rgb(4, 113, 31) 0%, rgb(3, 76, 52) 100%);"
>
	<div class="flex flex-row border-b border-white">
		<a href="/" class="p-2 hover:bg-gray-600">Home</a>
		<a href="/animations" class="p-2 hover:bg-gray-600">Animations</a>
		{#each animations as animation}
			<a href={animation.path} class="p-2 hover:bg-gray-600">{animation.name}</a>
		{/each}
	</div>
	<slot />
</div>
