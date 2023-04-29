<script lang="ts">
	import Card from './Card.svelte';

	type Video = {
		title: string;
		description: string;
		thumbnail: string;
		id: string;
	};

	export let videos: Video[] = [];
</script>

<Card direction="col" extras="basis-2/3">
	<p class="flex text-center text-2xl font-bold xl:text-3xl">Videos</p>
	<div
		class="mx-auto grid auto-cols-max auto-rows-max grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
	>
		{#each videos as video}
			<a class="group relative h-full w-fit" href="https://www.youtube.com/watch?v={video.id}">
				<img src={video.thumbnail} />
				<div class="absolute top-0 h-1/3 w-full bg-gradient-to-b from-slate-800" />
				<p class="absolute left-2 top-1 font-bold text-white group-hover:text-slate-300">
					{video.title}
				</p>
				<p class="invisible absolute left-2 top-8 font-bold text-white group-hover:visible">
					{video.description}
				</p>
			</a>
		{/each}
	</div>
</Card>
