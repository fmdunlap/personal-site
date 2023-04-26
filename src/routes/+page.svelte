<script>
	import Socials from '../components/Socials.svelte';
	import Profile from '../images/profile_256.jpg';
</script>

<div class="flex flex-col">
	<div
		class="m-auto my-8 flex w-2/3 flex-col justify-center gap-12 rounded bg-gray-100 px-12 py-12 shadow-md md:w-4/5 md:flex-row"
	>
		<img
			class="h-fit w-fit self-center rounded-full border-2 border-gray-200 object-cover hover:shadow-md"
			src={Profile}
			alt="Me - profile."
		/>
		<div class="flex max-w-md flex-col">
			<p class="text-center text-3xl font-bold lg:text-4xl">Hi, I'm Forrest!</p>
			<p class="my-4">
				I'm a software engineer, and I enjoy building things. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Pellentesque pellentesque vitae ligula et aliquam. Mauris
				congue elit eu quam iaculis consequat. Maecenas auctor, magna laoreet laoreet ornare, nisi
				urna auctor elit, in ornare nulla tortor id purus.
			</p>
			<div class="self-center">
				<Socials />
			</div>
		</div>
	</div>
</div>
