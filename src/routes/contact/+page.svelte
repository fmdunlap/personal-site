<script>
	import Socials from '../../components/Socials.svelte';
</script>

<div class="flex flex-col">
	<div
		class="m-auto my-8 flex w-2/3 flex-col items-center justify-center gap-y-4 rounded bg-gray-100 p-12 shadow-md md:w-4/5"
	>
		<p class="text-center text-3xl font-bold lg:text-4xl">Get in Touch</p>
		<form
			class="flex flex-col gap-y-1 rounded-md border border-slate-400 px-6 py-2 md:w-3/5 md:gap-y-1.5"
		>
			<div class="flex flex-col md:flex-row">
				<label for="name" class="w-24 text-lg font-bold">Email</label>
				<input
					type="text"
					class="flex-grow rounded-lg border border-solid border-slate-300 px-2"
					id="email"
					name="email"
					value=""
				/>
			</div>
			<div class="flex flex-col md:flex-row">
				<label for="name" class="w-24 text-lg font-bold">Subject</label>
				<input
					type="text"
					class="flex-grow rounded-lg border border-solid border-slate-300 px-2"
					id="subject"
					name="subject"
					value=""
				/>
			</div>
			<div class="flex flex-col md:flex-row">
				<label for="name" class="w-24 text-lg font-bold">Message</label>
				<textarea
					id="message"
					name="message"
					class="flex-grow resize-none rounded-lg border border-solid border-slate-300 px-2 py-1"
				/>
			</div>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
		<div class="flex flex-col items-center rounded-md px-10 py-2">
			<p class="text-xl font-bold">Or you can always DM me 😄</p>
			<Socials />
		</div>
	</div>
</div>
