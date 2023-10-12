<script lang="ts">
	export let level: 1 | 2 | 3 = 1;
	export let bold: boolean = false;
	export let spaceAfter: boolean = true;

	$: textSize = (() => {
		switch (level) {
			case 1:
				return 'text-2xl lg:text-3xl';
			case 2:
				return 'text-xl lg:text-2xl';
			case 3:
				return 'text-lg lg:text-xl';
		}
	})();
</script>

<p class="{bold ? 'font-bold' : ''} {spaceAfter ? 'mb-4' : ''} {textSize}">
	<slot />
</p>
