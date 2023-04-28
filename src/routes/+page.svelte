<script lang="ts">
	import Card from '../components/Card.svelte';
	import ContactForm from '../components/ContactForm.svelte';
	import Socials from '../components/Socials.svelte';
	import Profile from '../images/profile_256.jpg';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="mx-auto flex w-2/3 flex-col gap-y-8 md:w-3/5">
	<Card direction="col" switchPoint="lg">
		<img
			class="h-fit w-fit self-center rounded-full border-2 border-gray-200 object-cover hover:shadow-md"
			src={Profile}
			alt="Me - profile."
		/>
		<div class="flex flex-col">
			<p class="mb-2 flex-grow text-center text-2xl font-bold xl:text-3xl">Hi, I'm Forrest!</p>
			<hr class="mx-10 h-px border-0 bg-slate-500" />
			<p class="mb-2 mt-4">
				I'm a software engineer turned content creator. After spending four years at Google, I
				decided to shift my focus to full-time content creation.
			</p>
			<p class="my-2">
				My work centers around the intersection of software, mental health and emotional
				intelligence, and entrepreneurship. I'm passionate about helping others improve their lives
				through the power of technology and personal growth.
			</p>
			<p class="my-2">
				Currently, I'm in the process of creating a new business venture, exploring the
				possibilities of what's next.
			</p>
			<div class="mt-4 self-center">
				<Socials />
			</div>
		</div>
	</Card>

	<hr class="mx-20 border border-gray-400" />

	<div class="flex flex-col gap-12 xl:flex-row">
		<Card direction="col">
			<p>Filler</p>
		</Card>
		<Card direction="col">
			<p>Filler</p>
		</Card>
	</div>

	<hr class="mx-20 border border-gray-400" />

	<Card direction="col" gap={form?.success ? 'gap-6' : 'gap-12'}>
		<p class="flex-grow text-center text-2xl font-bold xl:text-3xl">Get in touch.</p>
		{#if !form?.success}
			<ContactForm errors={form?.errors} data={form?.data} />
		{:else}
			<Card background="bg-green-400" padding="p-24">
				<p class="mx-auto text-xl">Successfully Sent Message!</p>
			</Card>
		{/if}
		<div class="flex flex-col items-center rounded-md px-10 py-2">
			<p class="text-xl font-bold">Or you can always DM me 😄</p>
			<Socials />
		</div>
	</Card>
</div>
