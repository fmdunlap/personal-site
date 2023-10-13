<script lang="ts">
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import github from 'svelte-highlight/styles/github-dark';
	export let filename: string = '/some/file/path.js';
	export let code: string = `\
console.log("Hello, world!");`;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div class="rounded-lg bg-zinc-800 text-sm">
	<div class="rounded-t-lg bg-zinc-200 p-2">
		<p class="font-mono select-none">{filename}</p>
	</div>
	<HighlightSvelte {code} let:highlighted>
		<LineNumbers {highlighted} hideBorder />
	</HighlightSvelte>
</div>
