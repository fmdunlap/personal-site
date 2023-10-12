<script lang="ts">
	import { getCount } from './counterContext';

	let count = getCount();

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
