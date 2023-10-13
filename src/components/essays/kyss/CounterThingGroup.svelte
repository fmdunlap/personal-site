<script lang="ts">
	import ContextCounterThing from './ContextCounterThing.svelte';
	import CounterThing from './CounterThing.svelte';
	import { setCount } from './counterContext';

	setCount();

	export let color: 'green' | 'blue' = 'green';
	$: bgColor = color == 'green' ? 'bg-emerald-400' : 'bg-sky-400';

	export let groupNumber = 1;

	export let useStore: boolean = false;
</script>

<div class="mx-auto flex grow flex-col items-center p-4 {bgColor}">
	<p class="font-mono text-xl font-bold m-0 p-0">Counter Group {groupNumber}</p>
	{#if useStore}
		<CounterThing />
		<CounterThing />
	{:else}
		<ContextCounterThing />
		<ContextCounterThing />
	{/if}
</div>
