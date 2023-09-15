<script>
	import Card from '$components/Card.svelte';
	import { animations } from './animations';
</script>

<div class="p-6">
	<Card>
		<ul class="text-black">
			{#each animations as animation}
				<li>
					<a class="hover:text-green-900 hover:underline" href={animation.path}>{animation.name}</a>
				</li>
			{/each}
		</ul>
	</Card>
</div>
