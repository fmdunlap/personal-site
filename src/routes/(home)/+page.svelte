<script lang="ts">
	import Card from '$components/Card.svelte';
	import MatrixRain from './MatrixRain.svelte';
	import Profile from '$images/profile_256.jpg';
	import Socials from '$components/Socials.svelte';
	import VideoGallery from '$components/VideoGallery.svelte';
	import EssayLinks from '$components/EssayLinks.svelte';
	import ContactForm from '$components/ContactForm.svelte';

	$: colorCardHidden = true;
	$: r = 0;
	$: g = 255;
	$: b = 0;

	export let data;
	export let form;
</script>

<div class="fixed left-0 top-0 -z-10 h-screen w-screen overflow-hidden bg-black">
	<MatrixRain fadingColor={{ r: r, g: g, b: b }} />
</div>

<div class="mx-10 my-5 flex flex-col gap-6">
	<div class="md:mx-auto">
		<Card direction="row" switchPoint="lg" background="bg-zinc-800" extras="xl:mt-8 bg-opacity-95">
			<div class="flex flex-row gap-4 xl:mx-36">
				<img
					class="h-fit w-fit self-center rounded-full border-2 border-gray-200 object-cover hover:shadow-md"
					src={Profile}
					alt="Me - profile."
				/>
				<div class="flex flex-col text-white xl:mx-20">
					<p class="mb-2 flex-grow text-center text-2xl font-bold xl:text-3xl">
						Hi, I'm Forrest! 👋
					</p>
					<hr class="mx-auto h-px w-2/5 border-0 bg-slate-500" />
					<p class="mb-2 mt-4 text-lg">
						After spending four years at Google, I decided to shift my focus to full-time
						entrepreneurship.
					</p>
					<p class="my-2 text-lg">
						My work centers around the intersection of software, emotional intelligence, and
						entrepreneurship. I'm passionate about helping others improve their lives through the
						power of technology and personal growth.
					</p>
					<p class="my-2 text-lg">
						I'm currently in the process of building a new business and exploring the possibilities
						of what's next.
					</p>
					<div class="mt-4 self-center">
						<Socials />
					</div>
				</div>
			</div>
		</Card>
	</div>

	<hr class="mx-20 border border-gray-400" />

	<div class="flex flex-col gap-8 xl:flex-row">
		<Card direction="col" background="bg-zinc-800" extras="basis-2/3 xl:p-8 bg-opacity-95">
			<p class="flex text-center text-2xl font-bold text-slate-100 xl:text-3xl">Videos</p>
			<VideoGallery videos={data.gallery.videos} />
		</Card>

		<Card direction="col" background="bg-zinc-800" extras="basis-1/3 xl:p-8 bg-opacity-95">
			<p class="text-start text-2xl font-bold text-slate-100 xl:text-3xl">Essays</p>
			<EssayLinks />
		</Card>
	</div>

	<hr class="mx-20 border border-gray-400" />

	<Card
		direction="col"
		gap={form?.success ? 'gap-8' : 'gap-4'}
		padding="p-6"
		background="bg-zinc-800"
		extras="bg-opacity-95"
	>
		<p class="flex-grow text-center text-2xl font-bold text-slate-100 xl:text-3xl">Get in touch.</p>
		{#if !form?.success}
			<ContactForm action="?/contact" errors={form?.errors} data={form?.data} />
		{:else}
			<Card background="bg-green-400" padding="p-24">
				<p class="mx-auto text-xl">Successfully Sent Message!</p>
			</Card>
		{/if}
		<button
			class="h-min self-end bg-zinc-800 text-zinc-900"
			on:click={() => {
				colorCardHidden = !colorCardHidden;
			}}
		>
			CLICK ME
		</button>
	</Card>
	<div hidden={colorCardHidden}>
		<Card background="bg-zinc-800" direction="col" extras="z-20 bg-opacity-95">
			<div class="mx-auto flex flex-col gap-y-2 lg:mx-0">
				<div class="flex flex-row gap-x-2 text-white">
					<span class="self-center font-mono">R: </span>
					<input class="w-10 bg-zinc-700 p-1" bind:value={r} />
					<input type="range" min="0" max="255" bind:value={r} />
				</div>
				<div class="flex flex-row gap-x-2 text-white">
					<span class="self-center font-mono">G: </span>
					<input class="w-10 bg-zinc-700 p-1" bind:value={g} />
					<input type="range" min="0" max="255" bind:value={g} />
				</div>
				<div class="flex flex-row gap-x-2 text-white">
					<span class="self-center font-mono">B: </span>
					<input class="w-10 bg-zinc-700 p-1" bind:value={b} />
					<input type="range" min="0" max="255" bind:value={b} />
				</div>
			</div>
			<div class="flex grow flex-col lg:flex-row">
				<button
					class="mx-2 grow border border-solid border-white p-2 text-white"
					on:click={() => {
						r = 255;
						g = 105;
						b = 180;
					}}
				>
					Pink
				</button>
				<button
					class="mx-2 grow border border-solid border-white p-2 text-white"
					on:click={() => {
						r = 255;
						g = 0;
						b = 0;
					}}
				>
					Red
				</button>
				<button
					class="mx-2 grow border border-solid border-white p-2 text-white"
					on:click={() => {
						r = 0;
						g = 0;
						b = 255;
					}}
				>
					Blue
				</button>
				<button
					class="mx-2 grow border border-solid border-white p-2 text-white"
					on:click={() => {
						r = 0;
						g = 255;
						b = 0;
					}}
				>
					Green
				</button>
			</div>
		</Card>
	</div>
</div>
