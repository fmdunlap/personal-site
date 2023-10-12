<script lang="ts">
	type Video = {
		title: string;
		description: string;
		thumbnail: string;
		id: string;
	};

	export let videos: Video[] = [];
</script>

<div
	class="mx-auto grid auto-cols-max auto-rows-max grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
>
	{#if videos.length === 0}
		<p class="text-center">No videos yet!</p>
	{:else}
		{#each videos as video}
			<a
				class="group relative h-full w-fit xl:h-fit xl:w-full"
				href="https://www.youtube.com/watch?v={video.id}"
			>
				<img src={video.thumbnail} alt="Video thumbnail for {video.title}" />
				<div class="absolute top-0 h-1/3 w-full bg-gradient-to-b from-slate-800" />
				<p class="absolute left-2 top-1 font-bold text-white group-hover:text-slate-300">
					{video.title}
				</p>
				<p class="invisible absolute left-2 top-8 font-bold text-white group-hover:visible">
					{video.description}
				</p>
			</a>
		{/each}
	{/if}
</div>
