<script>
	let socials = [
		{ background: 'bg-twitterLogo', link: 'https://twitter.com/forrest_dunlap', dim: 'h-12 w-14' },
		{ background: 'bg-youtubeLogo', link: 'https://youtube.com/@forrestdunlap', dim: 'h-11 w-16' },
		{
			background: 'bg-instagramLogo',
			link: 'https://www.instagram.com/forrestmdunlap',
			dim: 'h-12 w-12'
		}
	];
</script>

<div class="z-10 mt-2 flex flex-row items-center gap-x-6">
	{#each socials as { background, link, dim }}
		<a href={link}>
			<div class="{dim} {background} bg-cover bg-no-repeat drop-shadow-md hover:drop-shadow-xl" />
		</a>
	{/each}
</div>
