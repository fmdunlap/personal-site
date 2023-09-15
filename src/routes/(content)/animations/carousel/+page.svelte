<script lang="ts">
	import P5, { type Sketch } from 'p5-svelte';
	import { onMount } from 'svelte';
	let sketch: Sketch = (p5) => {};

	type Vector = {
		x: number;
		y: number;
	};

	type Bouncer = {
		pos: Vector;
		radius: number;
		destinationRadians: number;
		color: { r: number; g: number; b: number };
	};

	$: NUM_BOUNCERS = 8;
	$: BOUNCER_RADIUS = 15;
	$: RADIANS_PER_SECOND = (2 * Math.PI) / 4;

	onMount(() => {
		sketch = (p5) => {
			let circleDiameter = 0;

			let bouncers: Bouncer[] = [];
			let piFraction = 0;

			let bezierControlPoint = {
				x: 0,
				y: 0
			};

			p5.setup = () => {
				p5.createCanvas(window.innerWidth / 2, window.innerHeight / 2);
				bezierControlPoint = {
					x: p5.width / 2,
					y: p5.height / 2
				};
				p5.frameRate(60);
				circleDiameter = (3 * Math.min(p5.width, p5.height)) / 4;

				piFraction = (2 * Math.PI) / NUM_BOUNCERS;
				for (let i = 0; i < NUM_BOUNCERS; i++) {
					bouncers.push({
						pos: {
							x: 0,
							y: 0
						},
						color: {
							r: Math.random() * 128 + 127,
							g: Math.random() * 128 + 127,
							b: Math.random() * 128 + 127
						},
						radius: 0,
						destinationRadians: (i + 1) * piFraction
					});
				}
			};

			function drawMainCircle(withCenter: boolean = true) {
				if (withCenter) {
					p5.fill(255, 255, 255, 0).stroke(255, 255, 255, 255);
					p5.circle(p5.width / 2, p5.height / 2, circleDiameter);
				}
			}

			function drawBezier(a: Vector, b: Vector) {
				p5.noFill().stroke(255, 255, 255, 255);
				p5.bezier(
					a.x,
					a.y,
					bezierControlPoint.x,
					bezierControlPoint.y,
					bezierControlPoint.x,
					bezierControlPoint.y,
					b.x,
					b.y
				);
			}

			function updateBouncer(bouncer: Bouncer, deltaTime: number) {
				let i = bouncers.indexOf(bouncer);

				let circleRadians = i * piFraction + (p5.millis() / 1000) * RADIANS_PER_SECOND;
				let bouncerXLoc = p5.width / 2 + (Math.cos(circleRadians) * circleDiameter) / 2;
				let bouncerYLoc = p5.height / 2 + (Math.sin(circleRadians) * circleDiameter) / 2;

				bouncer.pos.x = bouncerXLoc;
				bouncer.pos.y = bouncerYLoc;
				bouncer.radius = BOUNCER_RADIUS;
			}

			function drawBouncer(bouncer: Bouncer) {
				p5.fill(bouncer.color.r, bouncer.color.g, bouncer.color.b, 255).stroke(0, 0, 0, 255);
				p5.circle(bouncer.pos.x, bouncer.pos.y, bouncer.radius * 2);
			}

			function updateControlPoint() {
				bezierControlPoint = {
					x: p5.mouseX,
					y: p5.mouseY
				};
			}

			p5.draw = () => {
				p5.background(93, 102, 115);
				drawMainCircle();
				updateControlPoint();

				for (let i = 0; i < NUM_BOUNCERS; i++) {
					let bouncer = bouncers[i];
					updateBouncer(bouncer, p5.deltaTime);

					let nextBouncer = bouncers[(i + 1) % NUM_BOUNCERS];

					drawBezier(
						{ x: bouncer.pos.x, y: bouncer.pos.y },
						{ x: nextBouncer.pos.x, y: nextBouncer.pos.y }
					);
					drawBouncer(bouncer);
				}
			};
		};
	});
</script>

<div class="p-6">
	<P5 {sketch} />
</div>

<div class="flex flex-row p-4">
	<p class="px-4">Speed</p>
	<input type="range" min="0" max={Math.PI * 2} step="0.314" bind:value={RADIANS_PER_SECOND} />
</div>
