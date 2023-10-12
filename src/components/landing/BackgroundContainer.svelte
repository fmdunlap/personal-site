<script lang="ts">
	import { onMount } from 'svelte';

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

<div
	style="background: {backgroundGradientString};"
>
    <slot />
</div>