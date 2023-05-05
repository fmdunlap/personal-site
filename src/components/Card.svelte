<script lang="ts">
	export let direction: 'row' | 'col' = 'row';
	export let switchPoint: 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let background: string = 'bg-gray-100';
	export let rounded: boolean = true;
	export let shadow: boolean = true;
	export let padding: 'p-0' | 'p-2' | 'p-4' | 'p-6' | 'p-24' = 'p-6';
	export let gap: string = 'gap-4';
	export let wipeSizes: boolean = false;

	export let extras: string = '';

	let style = `w-full flex ${
		direction == 'row' ? 'flex-row' : 'flex-col'
	} flex-grow ${padding} ${gap} ${rounded ? 'rounded' : ''} ${background} ${
		shadow ? 'shadow-md' : ''
	} ${wipeSizes ? '' : 'md:p-12 md:gap-8'}`;

	if (switchPoint) {
		style += ` ${switchPoint}:${direction == 'row' ? 'flex-col' : 'flex-row'}`;
	}

	style += ` ${extras}`;
</script>

<div class={style}>
	<slot />
</div>
