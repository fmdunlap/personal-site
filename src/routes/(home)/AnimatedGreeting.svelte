<script lang="ts">
	import { onMount } from 'svelte';

	let greeting = 'Howdy';

	const greetingsList = [
		'Hi',
		'Hello',
		'Howdy',
		'Hey',
		'Yooo',
		'Bonjour',
		'Hola',
		'Ciao',
		'Namaste',
		'Salaam',
		'HERE',
		'Merhaba'
	];

	let nextGreeting = '';
	const maxKeystrokeTimeMs = 100;
	const minKeystrokeTimeMs = 25;
	function updateGreeting() {
		// Set the next greeting
		nextGreeting = greetingsList[Math.floor(Math.random() * greetingsList.length)];
		// Backspace out the current greeting
		let currentTimeout = 0;
		greeting.split('').forEach((_, i) => {
			setTimeout(() => {
				greeting = greeting.slice(0, -1);
			}, currentTimeout);
			currentTimeout +=
				Math.floor(Math.random() * (maxKeystrokeTimeMs - minKeystrokeTimeMs)) + minKeystrokeTimeMs;
		});
		// Type the next greeting
		nextGreeting.split('').forEach((_, i) => {
			setTimeout(() => {
				greeting += nextGreeting[i];
			}, currentTimeout);
			currentTimeout +=
				Math.floor(Math.random() * (maxKeystrokeTimeMs - minKeystrokeTimeMs)) + minKeystrokeTimeMs;
		});
		// Set a timeout to repeat
		setTimeout(updateGreeting, 7000);
	}

	onMount(() => {
		setTimeout(updateGreeting, 2500);
	});
</script>

{#key greeting}
	<p class="font-bold">
		{greeting}
	</p>
{/key}
