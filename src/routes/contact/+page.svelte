<script lang="ts">
	import Socials from '../../components/Socials.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="flex flex-col">
	<div
		class="m-auto my-8 flex w-2/3 flex-col items-center justify-center gap-y-4 rounded bg-gray-100 p-12 shadow-md md:w-3/5 xl:w-1/2"
	>
		<p class="text-center text-3xl font-bold lg:text-4xl">Get in Touch</p>

		{#if !form?.success}
			<form
				method="POST"
				class="flex flex-col rounded-md border border-slate-400 px-6 py-2 md:w-3/5 md:gap-y-1.5"
			>
				{#if form?.errors?.email}
					<p class="italic text-red-500">{form?.errors?.email}</p>
				{/if}
				<div class="my-1 flex flex-col lg:flex-row">
					<label for="name" class="w-24 text-lg font-bold">Email</label>
					<input
						type="text"
						class="flex-grow rounded-lg border border-solid border-slate-300 px-2"
						id="email"
						name="email"
						value={form?.data?.email ?? ''}
					/>
				</div>
				{#if form?.errors?.subject}
					<p class="italic text-red-500">{form?.errors?.subject}</p>
				{/if}
				<div class="my-1 flex flex-col lg:flex-row">
					<label for="name" class="w-24 text-lg font-bold">Subject</label>
					<input
						type="text"
						class="flex-1 rounded-lg border border-solid border-slate-300 px-2"
						id="subject"
						name="subject"
						value={form?.data?.subject ?? ''}
					/>
				</div>
				{#if form?.errors?.message}
					<p class="italic text-red-500">{form?.errors.message}</p>
				{/if}
				<div class="my-1 flex flex-col lg:flex-row">
					<label for="name" class="w-24 text-lg font-bold">Message</label>
					<textarea
						id="message"
						name="message"
						class="flex-grow resize-none rounded-lg border border-solid border-slate-300 px-2 py-1"
						>{form?.data?.message ?? ''}</textarea
					>
				</div>
				<div class="my-4 flex flex-row">
					<button type="submit" class="flex-1 rounded-xl bg-sky-600 p-3 text-white">Submit</button>
				</div>
			</form>
		{:else}
			<div
				class="flex flex-col rounded-md border border-slate-400 bg-green-300 px-6 py-2 md:w-3/5 md:gap-y-1.5"
			>
				<p class="m-12 text-xl">Successfully Sent Message!</p>
			</div>
		{/if}
		<div class="flex flex-col items-center rounded-md px-10 py-2">
			<p class="text-xl font-bold">Or you can always DM me 😄</p>
			<Socials />
		</div>
	</div>
</div>
