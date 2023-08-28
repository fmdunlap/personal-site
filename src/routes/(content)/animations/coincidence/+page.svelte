<script lang="ts">
	import type { Color } from 'p5';
	import P5, { type Sketch } from 'p5-svelte';
	import { onMount } from 'svelte';

	let sketch: Sketch = (p5) => {};

	type Vector = {
		x: number;
		y: number;
	};

	type Tracer = {
		segStart: Vector;
		segEnd: Vector;
		opacity: number;
		color: Color;
	};

	type Mover = {
		pos: Vector;
		tracers: Tracer[];
		color: Color;
		destination: Vector;
		unitDirection: Vector;
	};

	const N_MOVERS = 5;
	const MOVER_SIZE = 5;
	// Speed is the scalar. Direction vector is determined by destination.
	let MOVER_SPEED = 50; // Px/Sec
	let TRACER_LEN = 3;

	const GRID_MARGIN = 30;
	const GRID_X_POINTS = 25;
	const GRID_Y_POINTS = 25;

	onMount(() => {
		sketch = (p5) => {
			const points: Vector[][] = [];
			const movers: Mover[] = [];

			function defineGridPoints(margin: number, xPoints: number, yPoints: number) {
				const xStep = (p5.width - 2 * margin) / (xPoints - 1);
				const yStep = (p5.height - 2 * margin) / (yPoints - 1);

				for (let x = 0; x < xPoints; x++) {
					points[x] = [];
					for (let y = 0; y < yPoints; y++) {
						const xPos = Math.round(margin + x * xStep);
						const yPos = Math.round(margin + y * yStep);

						points[x][y] = {
							x: xPos,
							y: yPos
						};
					}
				}
			}

			function drawGrid() {
				points.forEach((row) => {
					row.forEach((point) => {
						p5.stroke(0);
						p5.strokeWeight(1);
						p5.point(point.x, point.y);
					});
				});
			}

			function initMovers(n_movers: number) {
				for (let i = 0; i < n_movers; i++) {
					const originPoint = {
						x: Math.round(p5.random(GRID_X_POINTS - 1)),
						y: Math.round(p5.random(GRID_Y_POINTS - 1))
					};

					const destinationPoint = {
						x: Math.round(p5.random(GRID_X_POINTS - 1)),
						y: Math.round(p5.random(GRID_Y_POINTS - 1))
					};

					const pos = {
						x: points[originPoint.x][originPoint.y].x,
						y: points[originPoint.x][originPoint.y].y
					};
					const destination = {
						x: points[destinationPoint.x][destinationPoint.y].x,
						y: points[destinationPoint.x][destinationPoint.y].y
					};

					const color = p5.color(p5.random(127), p5.random(127), p5.random(127));

					movers[i] = {
						pos,
						tracers: [],
						color,
						destination,
						unitDirection: calculateUnitDirection(destination, pos)
					};
				}
			}

			function calculateUnitDirection(destination: Vector, pos: Vector) {
				return {
					x: (destination.x - pos.x) / distance(destination, pos),
					y: (destination.y - pos.y) / distance(destination, pos)
				};
			}

			function drawMover(mover: Mover) {
				p5.stroke(mover.color);
				p5.strokeWeight(MOVER_SIZE);
				p5.point(mover.pos.x, mover.pos.y);

				mover.tracers.forEach((tracer) => {
					tracer.color.setAlpha(tracer.opacity);
					p5.stroke(tracer.color);
					p5.strokeWeight(1);
					p5.line(tracer.segStart.x, tracer.segStart.y, tracer.segEnd.x, tracer.segEnd.y);
				});
			}

			function getNewDestination(mover: Mover) {
				const { pos, tracers, destination, color } = mover;

				const destinationPoint = {
					x: Math.round(p5.random(GRID_X_POINTS - 1)),
					y: Math.round(p5.random(GRID_Y_POINTS - 1))
				};

				const tracer = {
					segStart: { x: destination.x, y: destination.y },
					segEnd: {
						x: points[destinationPoint.x][destinationPoint.y].x,
						y: points[destinationPoint.x][destinationPoint.y].y
					},
					opacity: 255,
					color: color
				};

				if (tracers.length > 0) {
					tracers[tracers.length - 1].segEnd.x = destination.x;
					tracers[tracers.length - 1].segEnd.y = destination.y;
				}

				tracers.forEach((tracer) => {
					tracer.opacity -= 255 / TRACER_LEN;
				});

				tracers.push(tracer);

				if (tracers.length > TRACER_LEN) {
					tracers.shift();
				}

				mover.pos.x = destination.x;
				mover.pos.y = destination.y;
				mover.destination.x = points[destinationPoint.x][destinationPoint.y].x;
				mover.destination.y = points[destinationPoint.x][destinationPoint.y].y;
				mover.unitDirection = calculateUnitDirection(destination, mover.pos);
			}

			function distance(a: Vector, b: Vector) {
				return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
			}

			function updateMover(mover: Mover, deltaTime: number) {
				const { pos, destination, unitDirection, tracers } = mover;

				// Checks if the mover will pass near the destination point in due to the speed.
				// If so, it sets the destination point as the new destination.
				if (distance(pos, destination) <= 2 * MOVER_SPEED * (deltaTime / 1000)) {
					getNewDestination(mover);
				}

				if (tracers.length > 0) {
					tracers[tracers.length - 1].segEnd.x = pos.x;
					tracers[tracers.length - 1].segEnd.y = pos.y;
				}

				pos.x += unitDirection.x * MOVER_SPEED * (deltaTime / 1000);
				pos.y += unitDirection.y * MOVER_SPEED * (deltaTime / 1000);
			}

			p5.setup = () => {
				p5.createCanvas(window.innerWidth / 2, window.innerHeight / 2);
				p5.frameRate(60);
				defineGridPoints(GRID_MARGIN, GRID_X_POINTS, GRID_Y_POINTS);
				initMovers(N_MOVERS);
			};

			p5.draw = () => {
				p5.background(186, 203, 230);
				drawGrid();
				movers.forEach((mover) => {
					drawMover(mover);
					updateMover(mover, p5.deltaTime);
				});
			};
		};
	});
</script>

<div class="m-4 flex flex-col bg-gray-600 p-4">
	<label>
		Tracer Length
		<input type="range" bind:value={TRACER_LEN} min="0" max="5" step="1" />
		{TRACER_LEN}
	</label>
	<label>
		Speed
		<input type="range" bind:value={MOVER_SPEED} min="0" max="75" step="1" />
		{MOVER_SPEED}
	</label>
</div>

<div class="p-6">
	<P5 {sketch} />
</div>
