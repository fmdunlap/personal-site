<script lang="ts">
	import { onMount } from 'svelte';
	import AnimatedGreeting from './AnimatedGreeting.svelte';
	import Socials from '$components/Socials.svelte';
	import Card from '$components/Card.svelte';

	type Color = {
		r: number;
		g: number;
		b: number;
	};

	// The initial color of the top left gradient
	const gradientFromStart = { r: 2, g: 115, b: 2 };
	// The final color of the top left gradient; dips to a darker emerald.
	const gradientFromEnd = { r: 6, g: 110, b: 69 };

	// The initial color of the bottom right gradient
	const gradientToStart = { r: 1, g: 65, b: 0 };
	// The final color of the bottom right gradient; dips to a darker blue.
	const gradientToEnd = { r: 6, g: 90, b: 120 };

	$: gradientFrom = lerpRGB(gradientFromStart, gradientFromEnd, 0);
	$: gradientTo = lerpRGB(gradientToStart, gradientToEnd, 0);

	$: backgroundGradientString = `linear-gradient(135deg, rgba(${gradientFrom.r},${gradientFrom.g},${gradientFrom.b},1) 0%, rgba(${gradientTo.r},${gradientTo.g},${gradientTo.b},1) 100%)`;

	function lerpRGB(color1: Color, color2: Color, t: number) {
		let color = {
			r: 0,
			g: 0,
			b: 0
		};
		color.r = color1.r + (color2.r - color1.r) * t;
		color.g = color1.g + (color2.g - color1.g) * t;
		color.b = color1.b + (color2.b - color1.b) * t;
		return color;
	}

	let currentTime = 0.0;
	let timeStep = 0.0025;
	let backgroundColorUpdateInterval: NodeJS.Timeout;
	function updateBackgroundColor() {
		gradientFrom = lerpRGB(gradientFromStart, gradientFromEnd, currentTime);
		gradientTo = lerpRGB(gradientToStart, gradientToEnd, currentTime);
		currentTime += timeStep;
		if (currentTime >= 0.5 || currentTime <= 0.0) {
			timeStep = timeStep * -1;
		}
		return () => {
			clearInterval(backgroundColorUpdateInterval);
		};
	}

	onMount(() => {
		backgroundColorUpdateInterval = setInterval(updateBackgroundColor, 17);
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Mulish&family=Space+Mono&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="min-w-screen flex min-h-screen flex-col bg-sky-500"
	style="background: {backgroundGradientString};"
>
	<p class="mx-auto mt-8 font-landing text-xl text-white">Forrest Dunlap</p>
	<div class="m-auto flex grow basis-10">
		<div class="my-auto flex flex-col lg:flex-row">
			<div
				class="mx-auto flex min-w-0 max-w-sm flex-grow-0 flex-col gap-y-4 p-12 text-white md:max-w-none"
			>
				<div class="flex select-none flex-row font-code text-lg md:text-2xl lg:text-4xl">
					<p>console.log("</p>
					<AnimatedGreeting />
					<p>!");</p>
				</div>
				<p class="max-w-2xl font-landing md:text-lg lg:text-xl">
					Hi! My name is Forrest Dunlap. I'm all about exploring the crossroads of code, creativity,
					and entrepreneurship. Dive into my YouTube channel for tech insights, or get a deeper dive
					on my blog. Let's journey through the digital landscape together.
				</p>
			</div>
			<img
				class="mx-auto h-fit w-fit rounded-xl lg:m-auto"
				src="http://placekitten.com/200/200"
				alt="Cat"
			/>
		</div>
	</div>
	<div class="m-auto mt-6">
		<Card background="mb-24 bg-slate-100" extras="">
			<Socials />
		</Card>
	</div>
</div>
