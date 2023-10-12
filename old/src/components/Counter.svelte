<script>
	$: counter = 0;

	function decrement() {
		counter -= 1;
	}

	function increment() {
		counter += 1;
	}
</script>

<div class="container flex rounded-md border-4 border-orange-700 shadow-md shadow-orange-300">
	<button class="px-2 text-3xl" on:click={decrement}>-</button>
	<p class="w-10 text-center text-3xl">{counter}</p>
	<button class="px-2 text-3xl" on:click={increment}>+</button>
</div>
