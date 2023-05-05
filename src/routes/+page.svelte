<script lang="ts">
	import Card from '../components/Card.svelte';
	import ContactForm from '../components/ContactForm.svelte';
	import EssayLinks from '../components/EssayLinks.svelte';
	import Socials from '../components/Socials.svelte';
	import VideoGallery from '../components/VideoGallery.svelte';
	import Profile from '../images/profile_256.jpg';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;
	export let data: PageData;
</script>

<Card direction="col" switchPoint="lg" extras="xl:mt-8">
	<img
		class="h-fit w-fit self-center rounded-full border-2 border-gray-200 object-cover hover:shadow-md"
		src={Profile}
		alt="Me - profile."
	/>
	<div class="flex flex-col">
		<p class="mb-2 flex-grow text-center text-2xl font-bold xl:text-3xl">Hi, I'm Forrest!</p>
		<hr class="mx-auto h-px w-2/5 border-0 bg-slate-500" />
		<p class="mb-2 mt-4">
			I was, until recently, a corporate software engineer. After spending four years at Google, I
			decided to shift my focus to full-time content creation.
		</p>
		<p class="my-2">
			My work centers around the intersection of software, mental health and emotional intelligence,
			and entrepreneurship. I'm passionate about helping others improve their lives through the
			power of technology and personal growth.
		</p>
		<p class="my-2">
			I'm currently in the process of creating a new business venture, exploring the possibilities
			of what's next.
		</p>
		<div class="mt-4 self-center">
			<Socials />
		</div>
	</div>
</Card>

<hr class="mx-20 border border-gray-400" />

<div class="flex flex-col gap-8 xl:flex-row">
	<VideoGallery videos={data.gallery.videos} />
	<div class="hidden">
		<EssayLinks />
	</div>
</div>

<hr class="mx-20 border border-gray-400" />

<Card direction="col" gap={form?.success ? 'gap-8' : 'gap-4'} padding="p-6">
	<p class="flex-grow text-center text-2xl font-bold xl:text-3xl">Get in touch.</p>
	{#if !form?.success}
		<ContactForm action="?/contact" errors={form?.errors} data={form?.data} />
	{:else}
		<Card background="bg-green-400" padding="p-24">
			<p class="mx-auto text-xl">Successfully Sent Message!</p>
		</Card>
	{/if}
	<div class="flex flex-col items-center rounded-md px-10 py-2">
		<p class="text-md font-bold md:text-xl">Or you can always DM me 😄</p>
		<Socials />
	</div>
</Card>
