export let libCountersCodeBlock = `\
import {writable} from 'svelte/store';

export const count = writable(0);`;

export let routesPageCodeBlock = `\
<script lang="ts">
	import { count } from '$lib/counters';

	function incrementCount() {
		$count = $count + 1;
	}

	function decrementCount() {
		$count = $count - 1;
	}
</script>

<div>
	<div class="flex flex-col bg-orange-200 p-4 text-black">
		<p>Count in the page:</p>
		<p>{$count}</p>
		<div class="flex flex-row gap-2">
			<button
				on:click={decrementCount} 
				class="rounded-lg bg-gray-800 px-4 py-1 text-white"
				>-</button
			>
			<button
				on:click={incrementCount}
				class="rounded-lg bg-gray-800 px-4 py-1 text-white"
				>+</button
			>
		</div>
	</div>
</div>
`;

export let counterThingCodeBlock = `\
<script lang="ts">
	import { count } from '$lib/counters';
	import { on } from 'nodemailer/lib/xoauth2';

	function increment() {
		$count = $count + 1;
	}

	function decrement() {
		$count = $count - 1;
	}
</script>

<p>{$count}</p>
<div class="flex flex-row gap-2">
	<button on:click={decrement} class="rounded-lg bg-gray-800 px-4 py-1 text-white">-</button>
	<button on:click={increment} class="rounded-lg bg-gray-800 px-4 py-1 text-white">+</button>
</div>
`;

export let pageAndCounterThingCodeBlock = `\
<script lang="ts">
	import { count } from '$lib/counters';
	import CounterThing from './CounterThing.svelte';

	function incrementCount() {
		$count = $count + 1;
	}

	function decrementCount() {
		$count = $count - 1;
	}
</script>

<div>
	<div class="flex flex-col bg-orange-200 p-4 text-black">
		<p>Count in the page:</p>
		<p>{$count}</p>
		<div class="flex flex-row gap-2">
			<button 
            on:click={decrementCount} 
            class="rounded-lg bg-gray-800 px-4 py-1 text-white"
				>-</button
			>
			<button 
            on:click={incrementCount} 
            class="rounded-lg bg-gray-800 px-4 py-1 text-white"
				>+</button
			>
		</div>
	</div>
	<div class="bg-green-200 p-4 text-black">
		<p>Count in the component:</p>
		<CounterThing />
	</div>
</div>
`;