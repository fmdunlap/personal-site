<script>
	import Socials from '../components/Socials.svelte';
	import Profile from '../images/profile_256.jpg';
</script>

<div class="flex flex-col">
	<div
		class="m-auto my-8 flex w-2/3 flex-col justify-center gap-12 rounded bg-gray-100 px-12 py-12 shadow-md md:w-3/5 lg:flex-row xl:w-1/2"
	>
		<img
			class="h-fit w-fit self-center rounded-full border-2 border-gray-200 object-cover hover:shadow-md"
			src={Profile}
			alt="Me - profile."
		/>
		<div class="flex flex-col">
			<p class="flex-grow text-center text-2xl font-bold xl:text-3xl mb-2">Hi, I'm Forrest!</p>
			<hr class='h-px mx-10 bg-slate-500 border-0'/>
			<p class="mt-4 mb-2">
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
	</div>
</div>
