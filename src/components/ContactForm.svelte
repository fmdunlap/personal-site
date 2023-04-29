<script lang="ts">
	export let errors: { [key: string]: string } | undefined;
	export let data: { [key: string]: string } | undefined;
</script>

<form
	method="POST"
	action="?/contact"
	class="mx-auto flex w-full flex-col rounded-md border border-slate-400 px-6 py-2 md:gap-y-1.5"
>
	{#if errors?.email}
		<p class="italic text-red-500">{errors?.email}</p>
	{/if}
	<div class="my-1 flex flex-col lg:flex-row">
		<label for="name" class="w-24 text-lg font-bold">Email</label>
		<input
			type="text"
			class="flex-grow rounded-lg border border-solid border-slate-300 px-2"
			id="email"
			name="email"
			value={data?.email ?? ''}
		/>
	</div>
	{#if errors?.subject}
		<p class="italic text-red-500">{errors?.subject}</p>
	{/if}
	<div class="my-1 flex flex-col lg:flex-row">
		<label for="name" class="w-24 text-lg font-bold">Subject</label>
		<input
			type="text"
			class="flex-1 rounded-lg border border-solid border-slate-300 px-2"
			id="subject"
			name="subject"
			value={data?.subject ?? ''}
		/>
	</div>
	{#if errors?.message}
		<p class="italic text-red-500">{errors.message}</p>
	{/if}
	<div class="my-1 flex flex-col lg:flex-row">
		<label for="name" class="w-24 text-lg font-bold">Message</label>
		<textarea
			id="message"
			name="message"
			class="flex-grow resize-none rounded-lg border border-solid border-slate-300 px-2 py-1"
			>{data?.message ?? ''}</textarea
		>
	</div>
	<div class="my-4 flex flex-row">
		<button type="submit" class="flex-1 rounded-xl bg-sky-600 p-3 text-white">Submit</button>
	</div>
</form>
