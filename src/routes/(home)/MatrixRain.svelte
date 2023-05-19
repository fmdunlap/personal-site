<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let numColumns: number = 200;
	export let numRows: number = 200;
	export let updateMsec: number = 75;
	export let stateDecayRate: number = 0.05;
	export let stateInflectionPoint: number = 0.75;
	export let newRainChance: number = 0.02;
	export let brightColor: Color = { r: 255, g: 255, b: 255 };
	export let fadingColor: Color = { r: 0, g: 255, b: 0 };
	export let disabledColor: Color = { r: 0, g: 0, b: 0 };
	export let usePhrase: string = '';

	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';

	type Color = {
		r: number;
		g: number;
		b: number;
	};

	type Cell = {
		col: number;
		row: number;
	};

	let updateInterval: NodeJS.Timer | undefined = undefined;

	let outerDiv: HTMLDivElement;
	let characterGrid: string[][] = [];
	let activationGrid: number[][] = [];
	let activeCells: Cell[] = [];

	let screenWidth = 0;
	let screenHeight = 0;

	onDestroy(() => {
		clearInterval(updateInterval);
	});

	onMount(() => {
		calculateNumRowsAndCols();
		console.log(numRows, numColumns);
		characterGrid = generateCharacterArray(numColumns, numRows);
		activationGrid = [...Array(numColumns)].map((e) => Array(numRows));
		initActiveRainDrops();
		updateInterval = setInterval(update, updateMsec);
	});

	function calculateNumRowsAndCols() {
		let charHeight = getCharacterHeight();
		// It's a pretty imperfect measure, but the typical character height:width ratio is 1:0.8.
		numRows = Math.min(numRows, Math.floor(screenHeight / charHeight));
		numColumns = Math.min(numColumns, Math.floor(screenWidth / (charHeight / 0.8)));
	}

	function initActiveRainDrops() {
		for (let i = 0; i < numColumns; i++) {
			if (Math.random() < newRainChance * numRows) {
				let state = 1;
				let row = Math.floor(Math.random() * numRows);
				while (state > 0 && row >= 0) {
					activationGrid[i][row] = state;
					activeCells.push({ col: i, row: row });
					state -= stateDecayRate;
					row -= 1;
				}
			}
		}
	}

	function update() {
		let newActives: Cell[] = [];
		activeCells.forEach((cell) => {
			if (activationGrid[cell.col][cell.row] == 1 && cell.row < numRows - 1) {
				newActives.push({
					col: cell.col,
					row: cell.row + 1
				});
				activationGrid[cell.col][cell.row + 1] = 1;
			}
			activationGrid[cell.col][cell.row] -= stateDecayRate;
			if (activationGrid[cell.col][cell.row] > 0) {
				newActives.push(cell);
			}
		});
		for (let i = 0; i < numColumns; i++) {
			if (Math.random() < newRainChance) {
				activationGrid[i][0] = 1;
				newActives.push({
					col: i,
					row: 0
				});
			}
		}
		activeCells = newActives;
	}

	function generateCharacterArray(nCols: number, nRows: number): string[][] {
		let charArray: string[][] = [];
		for (let i = 0; i < nCols; i++) {
			charArray.push(generateCol(nRows, i));
		}
		return charArray;
	}

	function generateCol(numRows: number, offset: number): string[] {
		if (usePhrase) {
			let col: string[] = [];
			for (let i = 0; i < numRows; i++) {
				let char = usePhrase?.at((offset + i) % usePhrase.length);
				if (char != undefined) {
					col.push(char);
				}
			}
			return col;
		}
		return Array(numRows)
			.join()
			.split(',')
			.map(() => alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
	}

	function getMatrixCharacterColor(statePercent: number): string {
		if (statePercent <= 0.0) {
			return `rgb(${disabledColor.r}, ${disabledColor.g}, ${disabledColor.b})`;
		}
		if (statePercent > stateInflectionPoint) {
			const newColor = lerpColor(
				brightColor,
				fadingColor,
				1 - (statePercent - stateInflectionPoint) / (1 - stateInflectionPoint)
			);
			return `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
		}
		const newColor = lerpColor(fadingColor, disabledColor, 1 - statePercent / stateInflectionPoint);
		return `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
	}

	function lerpColor(start: Color, end: Color, amt: number): Color {
		return {
			r: lerp(start.r / 255, end.r / 255, amt) * 255,
			g: lerp(start.g / 255, end.g / 255, amt) * 255,
			b: lerp(start.b / 255, end.b / 255, amt) * 255
		};
	}

	function lerp(start: number, end: number, amt: number) {
		return (1 - amt) * start + amt * end;
	}

	function getCharacterHeight(): number {
		var temp = document.createElement(outerDiv.nodeName),
			ret;
		temp.setAttribute(
			'style',
			'margin:0; padding:0; ' +
				'font-family:' +
				(outerDiv.style.fontFamily || 'inherit') +
				'; ' +
				'line-height: 1;' +
				'font-size:' +
				(outerDiv.style.fontSize || 'inherit')
		);
		temp.innerHTML = 'A';

		outerDiv.parentNode?.parentNode?.appendChild(temp);
		ret = temp.clientHeight;
		temp.parentNode?.removeChild(temp);

		return ret;
	}
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight}/>

<div class="flex grow select-none flex-row overflow-hidden font-mono" bind:this={outerDiv}>
	{#each characterGrid as column, i}
		<div class="flex grow flex-col">
			{#each column as matrixChar, j}
				<div
					style="color: {getMatrixCharacterColor(activationGrid[i][j])}"
					class="inline-block grow self-center justify-self-center p-0 text-center align-super font-bold leading-none"
				>
					{characterGrid[i][j]}
				</div>
			{/each}
		</div>
	{/each}
</div>
