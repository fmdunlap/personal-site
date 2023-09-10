<script lang="ts">
	import EssayCard from '$components/essay/EssayCard.svelte';
	import EssayCode from '$components/essay/EssayCode.svelte';
	import EssayHeading from '$components/essay/EssayHeading.svelte';
	import EssayImage from '$components/essay/EssayImage.svelte';
	import SvelteRouter from './SvelteRouter.png';
	import sponge from './sponge.png';
	import { count } from '$lib/counters';
	import Footnote from '$components/essay/Footnote.svelte';
	import CounterThing from './CounterThing.svelte';
	import EssayList from '$components/essay/EssayList.svelte';
	import EssayListItem from '$components/essay/EssayListItem.svelte';

	import {
		counterThingCodeBlock,
		libCountersCodeBlock,
		routesPageCodeBlock,
		pageAndCounterThingCodeBlock
	} from './codeBlocks';
	import EssayHr from '$components/essay/EssayHR.svelte';

	function incrementCount() {
		$count = $count + 1;
	}

	function decrementCount() {
		$count = $count - 1;
	}
</script>

<EssayCard>
	<span slot="title">The Joys of SvelteKit</span>
	<span slot="content">
		<div class="text-md xl-me-60 flex flex-col gap-y-4">
			<p>
				When it comes to choosing a framework for modern web development, there's a myriad of
				options to consider. While React has long been the go-to choice for many developers,
				SvelteKit is increasingly stealing the limelight. In this article, I'll share why I think
				SvelteKit is a superior choice for a variety of projects, drawing on my experience in both
				React and SvelteKit.
			</p>
			<EssayHeading>Simplicity ⇒ Intuition ⇒ Velocity</EssayHeading>
			<p>
				Here's the magic equation: when things are simple, you intuitively know what to do, and that
				means you build stuff fast. Crazy fast. That's SvelteKit in a nutshell. React is like that
				old, reliable car you've had for years. It gets you where you need to go, but oh boy, the
				maintenance! You find yourself tinkering under the hood more often than actually driving. In
				contrast, SvelteKit feels like hopping into a sleek, self-driving Tesla. You just set your
				destination and enjoy the ride.
			</p>
			<p>
				The joy begins with the beautifully simple syntax. No JSX to wrestle with or "useState" and
				"useEffect" hooks to manage your component's lifecycle. You're working with something that
				feels like HTML, CSS, and JavaScript got together and had a lovely, well-behaved child. This
				simplicity naturally leads to intuition. You find yourself guessing the right way to do
				things, and surprisingly, you're often correct! You know that feeling when you're using a
				new app and you think, "I bet this button does X" — and it does? That's SvelteKit for you.
				Everything is where you expect it to be.
			</p>
			<p>
				The end result of this simplicity and intuition? Velocity. Breakneck development speed.
				You're no longer bogged down by boilerplate code or wrangling with complex state management.
				In the same time it takes to set up a basic NextJS app, you've probably already built a
				couple of pages in SvelteKit, maybe even thrown in a few slick transitions. While your
				React-dev buddies are still configuring Webpack or debating the best way to manage state,
				you're watching your beautifully-crafted SvelteKit app come to life. And that, my friends,
				is a feeling worth its weight in code.
			</p>
			<EssayHeading level={2}>Intuitive Routing</EssayHeading>
			<p>
				Ever had to manually install one of the different router solutions for React? I have. And
				I’ve had to learn different routers depending on which one the project I’m contributing to
				is using. It’s not great.
			</p>
			<p>
				SvelteKit's approach to routing is built-in and based on the filesystem. Create a
				+page.svelte or +layout.svelte file, and it automatically becomes a route in your
				application. This eliminates the need for a separate routing library, making project
				organization and navigation more straightforward compared to React.
			</p>
			<p>
				There are some arguments against the structure. The one I find most compelling is that
				staring at a file tree of +page.svelte and +layout.svelte files can be a bit overwhelming.
			</p>
			<EssayImage
				src={SvelteRouter}
				caption="I mean... you're not wrong..."
				alt="SvelteKit Router"
				extras={'w-56'}
			/>
			<p>
				Personally, though, I find that to be a pretty *meh* argument. You get used to it pretty
				quickly, and the semantic benefit of using a structure that we’re already familiar with is
				huge.
			</p>
			<p>
				In terms of code structure, SvelteKit files keep the structural HTML separate from the
				functional JavaScript or TypeScript code. This is more straightforward than React's JSX,
				which often intertwines logic with structure.
			</p>
			<EssayHeading level={2}>Intuitive State Management</EssayHeading>
			<p>
				When I was first learning Svelte, I was shocked at how simple state management was. In a
				React environment, the complexities of state management quickly escalate, often pushing
				developers toward cumbersome solutions like Redux or MobX. SvelteKit, however, brilliantly
				simplifies this process.
			</p>
			<p>
				Imagine a world where you don't have to call a function to change a variable and trigger a
				re-render. In Svelte, and by extension SvelteKit, all you have to do is update a
				variable—yes, a good old JavaScript variable—and the UI magically updates. It's as simple as
				prepending a variable with $: and letting Svelte do the rest<Footnote number={1}>
					Yes, it's true that as you go deeper into SvelteKit's state management, you'll come across
					the need for a more refined approach in multi-user environments. But let's be clear: the
					complexity introduced by SvelteKit Contexts is almost laughably low compared to the
					intricate setups you might find yourself tangled in with libraries like Redux. With Svelte
					Contexts, you can effortlessly isolate data to specific parts of your application,
					offering a clean and secure method to manage state.
				</Footnote>.
			</p>
			<p>
				There's no need to "lift state up" or drill props down multiple component layers. Your code
				remains clean, readable, and intuitive. When a variable changes, your UI changes. Period.
				You spend less time tracking state changes and more time crafting the user experiences you
				actually care about. It's like having a helpful assistant who instinctively knows when to
				refresh your coffee—except this one updates your UI.
			</p>
			<p>
				Pictures (or I guess code snippets in this case) are worth a thousand words, so let’s take a
				look at one:
			</p>
			<EssayHeading level={3}>A Quick State Management Example</EssayHeading>
			<p>Let's start with the heart of our reactivity—the store.</p>
			<EssayCode filename="$lib/counters.ts" code={libCountersCodeBlock} />
			<p>
				Simple, right? We've just created a writable store, initialized at zero. No Redux
				boilerplate or elaborate setup; it's just JavaScript.
			</p>
			<p>
				Now, let's integrate this store into a SvelteKit page. Here's where the magic happens. In
				our page, we import the count store, then perform increments and decrements directly within
				the component.
			</p>
			<EssayCode filename="$routes/+page.svelte" code={routesPageCodeBlock} />
			<p>The beauty? When count changes, it's instantly reflected in the UI. Have a look:</p>

			<!-- COUNT EXAMPLE IN PAGE -->

			<div class="flex flex-col bg-orange-200 p-4 text-black">
				<p>Count in the page:</p>
				<p>{$count}</p>
				<div class="flex flex-row gap-2">
					<button on:click={decrementCount} class="rounded-lg bg-gray-800 px-4 py-1 text-white"
						>-</button
					>
					<button on:click={incrementCount} class="rounded-lg bg-gray-800 px-4 py-1 text-white"
						>+</button
					>
				</div>
			</div>

			<!-- END EXAMPLE -->

			<p>
				But hold on, it gets better. Let's say you have a separate Svelte component called
				CounterThing where you want to use the same value. Thanks to SvelteKit, it's a breeze. Have
				a look at this:
			</p>
			<EssayCode filename="$components/CounterThing.svelte" code={counterThingCodeBlock} />

			<p>
				On its own, this new component is almost identical to what we added to the page earlier.
				Here it is surrounded by everyone's favorite red css outline:
			</p>

			<div class="border border-red-400">
				<CounterThing />
			</div>

			<p>
				What makes it cool, however, is the reuse of the $count store. The value of $count is
				instantly available and in sync across all components that import it. No prop drilling, no
				context providers, just straightforward and readable code.
			</p>
			<p>
				If you click the +/- buttons in the component, you'll notice tha the value of count earlier
				on the page also changes.
			</p>
			<p>
				Take a second to process that. SvelteKit doesn't just make coding easier; it makes it
				downright enjoyable. You spend less time wrestling with state management and more time
				building, well, awesome stuff!
			</p>
			<EssayHeading level={2}>Less Toil ⇒ More Developing</EssayHeading>
			<EssayHeading level={3}>Built In Optimization</EssayHeading>
			<p>
				Let’s face it - performance optimization can be soul sucking in web development. Thankfully,
				SvelteKit automatically handles code splitting and lazy-loading, freeing you from manual
				configurations and ensuring faster load times, a feature not readily available
				out-of-the-box in React.
			</p>
			<p>
				Svelte also compiles components down to highly efficient imperative code that directly
				updates the real DOM unlike React, which uses a virtual DOM to update changes before
				rendering them to the actual DOM. That lends it some powerful advantages:
			</p>
			<EssayList>
				<EssayListItem>
					<span class="font-bold">Reduced Overhead:</span> Virtual DOM libraries have to do extra work
					by diffing the current and new virtual DOMs and calculating the minimal set of changes. This
					process consumes CPU time and can become a bottleneck in complex applications.
				</EssayListItem>
				<EssayListItem>
					<span class="font-bold">Smaller Bundle Size:</span>Since Svelte doesn't ship with a
					runtime for handling a virtual DOM, the end bundle is often smaller. This leads to quicker
					load times.
				</EssayListItem>
				<EssayListItem>
					<span class="font-bold">Reactivity:</span> Svelte's reactivity model is more straightforward.
					It doesn't require a diffing algorithm to detect changes, which generally results in faster
					updates.
				</EssayListItem>
				<EssayListItem>
					<span class="font-bold">Memory Efficiency:</span> Less memory is used because there's no need
					to keep the real DOM and the virtual DOM in sync.
				</EssayListItem>
			</EssayList>
			<p>
				It's worth noting that using a virtual DOM isn't inherently slow; it’s just a solution for
				specific problems (like maintaining state across DOM updates).
			</p>
			<EssayHeading level={3}>SEO Without Worry</EssayHeading>
			<p>
				SEO is critical for the visibility of your application. SvelteKit provides server-side
				rendering and prerendering for static pages right out of the box, negating the need for
				third-party solutions for these common SEO practices.
			</p>
			<p>Out of the box, SvelteKit provides…</p>
			<EssayList>
				<EssayListItem>
					<span class="font-bold">Server-Side Rendering (SSR):</span> By default, SvelteKit supports
					SSR, which ensures that your website's content is fully crawlable by search engine bots. This
					is a critical factor for SEO.
				</EssayListItem>
				<EssayListItem>
					<span class="font-bold">Static Prerendering:</span> For pages that don't require dynamic data,
					you can prerender them, improving loading speed—a factor that positively influences SEO rankings.
				</EssayListItem>
				<EssayListItem>
					<span class="font-bold">Dynamic Content:</span> Using load functions and API routes, SvelteKit
					lets you create SEO-friendly dynamic content that can also be server-rendered. updates.
				</EssayListItem>
				<EssayListItem>
					<span class="font-bold">Progressive Enhancement:</span> The framework allows for pages to be
					functional even without JavaScript, making the content accessible to search engines that might
					not execute JavaScript.
				</EssayListItem>
			</EssayList>
			<EssayHeading level={3}>Deployability</EssayHeading>
			<p>
				One of the most alluring aspects of SvelteKit is its adaptability to various architectures.
				From self-hosted Node.js applications to serverless web apps, and even SPAs—SvelteKit has
				you covered. It also offers a range of community and custom adapters, allowing deployment to
				specialized server environments, browser extensions, and even (with some native wrappers
				like capacitor.js) native applications.
			</p>
			<EssayHeading level={2}>Addressing The Haters</EssayHeading>
			<EssayImage
				src={sponge}
				alt="Spongebob mocking people about Svelte's ecosystem"
				caption="Sorry, not sorry."
			/>
			<p>
				Oh, man, the "smaller ecosystem" argument—you've heard it, I've heard it, and it's like the
				'90s broken record that never stops playing. But here's my hot take: if you think SvelteKit
				is lacking because its ecosystem isn't as large as React's, then, buddy, you're missing out
				on the bigger picture. Sure, you may not find as many UI component libraries, but let me
				tell you, the ones that exist like SkeletonUI and DaisyUI are golden. Plus, SvelteKit offers
				you the tools to easily create your own without a fuss.
			</p>
			<p>
				And let's not forget other JS libraries. Whether you're working with ag-grid or chart.js,
				SvelteKit doesn't demand a wrapper. The framework gives you the freedom to use these
				libraries almost as is. You're not learning a wrapper; you're learning the library itself.
				Most of the packages that are “react” packages are just wrappers around a different library.
				For instance, react-places-autocomplete is just the Google places JS library in a
				react-specific wrapper.
			</p>
			<p>
				On to styling, shall we? React has CSS modules, but if you're someone who enjoys the clean
				look of style right next to your markup (guilty as charged! See my TailwindCSS block
				above…), then you've got to juggle between styled-components, Emotion, and whatnot.
				SvelteKit says, "Hey, let's simplify!" and gives you scoped styling right in the same file.
				It's as straightforward as adding a <style></style> block.
			</p>
			<p>
				Animations and transitions? React has libraries for that. Multiple libraries. SvelteKit?
				It's built right into the framework. From the get-go, you can animate to your heart's
				content without adding one more package to your package.json.
			</p>
			<p>Basically, bite me.</p>
			<p>
				In SvelteKit you spend less time wrapping your head around wrappers (see what I did there?)
				and more time doing what you love—coding. With Svelte you get a streamlined, efficient
				environment where everything just clicks. So next time someone talks about the "smaller
				ecosystem," maybe remind them that sometimes, less is more. Way more.
			</p>
			<EssayHeading level={2}>I like the stock</EssayHeading>
			<p>
				IMO SvelteKit is the breath of fresh air we’ve all needed in an industry ruled by React. Say
				goodbye to the days of wrestling with configuration files or external state management
				libraries. That "batteries-included" philosophy is clear, and you can feel it. Need routing?
				It's already there, guided by a straightforward file-based system. Want to separate your
				server-side and client-side logic? SvelteKit lays it out for you so cleanly that you'd
				wonder why it isn't the standard everywhere.
			</p>
			<p>
				But what I truly love about SvelteKit is how it makes you feel like a wizard at your craft.
				You write less code but somehow achieve more. The framework's syntax is so intuitive that it
				almost reads like plain English. Create a store? A few lines. Build a fully-interactive
				component? Just a handful of readable code. Before you know it, you're building complex apps
				with this sense of simplicity and elegance, and it almost feels like cheating. It's like
				SvelteKit knows what you're trying to do and just says, "Hey, I got you." That's not just
				good design; that's practically a developmental hug. And let's be real, who couldn't use
				more of those?
			</p>
			<EssayHr />
			<p>
				P.s. this whole website is written using SvelteKit. And it's open source! Check it out on <a
					href="https://github.com/fmdunlap/personal-site">my github.</a
				>
			</p>
		</div>
	</span>
</EssayCard>
