<script lang="ts">
	$: footnoteVisible = false;
	let timerId: NodeJS.Timeout | null = null;
	export let number: number;

	function makeFootnoteVisibile() {
		console.log('Becoming visible');
		if (timerId) {
			clearTimeout(timerId);
		}
		footnoteVisible = true;
		timerId = setTimeout(() => {
			footnoteVisible = false;
			console.log('Becoming invisible.');
			timerId = null;
		}, 5000);
	}
</script>

<div class="group relative inline ps-px">
	<span
		class="align-top text-xs font-bold text-sky-600 underline"
		on:mouseenter={makeFootnoteVisibile}>{number}</span
	>
	<div
		class="{footnoteVisible
			? 'visible'
			: 'invisible'} fixed bottom-3 me-12 rounded-xl border border-solid border-zinc-700 bg-amber-100 px-8 py-4 opacity-0 shadow-lg transition delay-150 duration-700 ease-in-out group-hover:opacity-100 group-hover:transition-opacity md:me-24 lg:bottom-12 lg:me-0 lg:w-1/3 lg:px-12 lg:py-6"
	>
		<p><slot /></p>
	</div>
</div>
