<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	export let numColumns: number = 75;
	export let numRows: number = 65;
	export let updateMsec: number = 66;
	export let stateDecayRate: number = 0.05;
	export let stateInflectionPoint: number = 0.75;
	export let newRainChance: number = 0.05;
	export let brightColor: Color = { r: 255, g: 255, b: 255 };
	export let fadingColor: Color = { r: 0, g: 255, b: 0 };
	export let disabledColor: Color = { r: 0, g: 0, b: 0 };

	type Color = {
		r: number;
		g: number;
		b: number;
	};

	type MatrixCharacter = {
		char: string;
		statePercent: number; // 0.0 - 1.0. 0.0 is fully off, 1.0 is initially on.
	};

	let updateInterval: NodeJS.Timer | undefined = undefined;

	let outerDiv: HTMLDivElement;
	let textCanvas: MatrixCharacter[][] = [];
	let activeCharacters: [number, number][] = [];

	onDestroy(() => {
		clearInterval(updateInterval);
	});

	onMount(() => {
		textCanvas = generateMatrixCharacterArray();
		for (let i = 0; i < numColumns; i++) {
			if (Math.random() < newRainChance * numRows) {
				activeCharacters.push([i, Math.floor(Math.random() * numRows)]);
			}
		}
		initActiveRainDrops();
		updateInterval = setInterval(update, updateMsec);
	});

	function initActiveRainDrops() {
		activeCharacters.forEach(([col, row]) => {
			let curState = 1;
			let r = row;
			let c = col;
			while (curState > 0 && r >= 0) {
				textCanvas[c][r].statePercent = curState;
				curState -= stateDecayRate;
				r--;
				if (activeCharacters.includes([c, r])) {
					break;
				}
			}
		});
	}

	function update() {
		activeCharacters.sort((a, b) => b[1] - a[1]);
		for (let col = 0; col < numColumns; col++) {
			for (let row = 0; row < numRows; row++) {
				if (activeCharacters.filter(([c, r]) => r == row && c == col).length > 0) {
					textCanvas[col][row].statePercent = 1;
					continue;
				}
				textCanvas[col][row].statePercent = Math.max(
					0,
					textCanvas[col][row].statePercent - stateDecayRate
				);
			}
		}
		activeCharacters = activeCharacters.map((char) => {
			return [char[0], char[1] + 1];
		});
		activeCharacters = activeCharacters.filter((char) => {
			return char[1] < numRows;
		});
		for (let i = 0; i < numColumns; i++) {
			if (Math.random() < newRainChance) {
				activeCharacters.push([i, 0]);
			}
		}
	}

	function generateMatrixCharacterArray(): MatrixCharacter[][] {
		return Array(numColumns)
			.join()
			.split(',')
			.map(function () {
				return generateRandomCol(numRows);
			});
	}

	function generateRandomCol(numRows: number): MatrixCharacter[] {
		return Array(numRows)
			.join()
			.split(',')
			.map(function () {
				return {
					char: alphabet.charAt(Math.floor(Math.random() * alphabet.length)),
					statePercent: 0
				};
			});
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
</script>

<!-- <svelte:window class="scroll-" -->

<div class="flex grow select-none flex-row overflow-hidden font-mono" bind:this={outerDiv}>
	{#each textCanvas as column}
		<div class="flex grow flex-col">
			{#each column as matrixChar}
				<div
					style="color: {getMatrixCharacterColor(matrixChar.statePercent)}"
					class="inline-block grow self-center justify-self-center p-0 text-center align-super font-bold leading-none"
				>
					{matrixChar.char}
				</div>
			{/each}
		</div>
	{/each}
</div>
