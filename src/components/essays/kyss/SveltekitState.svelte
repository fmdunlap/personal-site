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

	import * as codeBlocks from './codeBlocks';
	import EssayHr from '$components/essay/EssayHR.svelte';
	import CounterThingGroup from './CounterThingGroup.svelte';

	function incrementCount() {
		$count = $count + 1;
	}

	function decrementCount() {
		$count = $count - 1;
	}
</script>

<EssayCard>
	<span slot="title"
		>KYSS<Footnote number={1}>Y is a vowel. Sometimes. Bite me.</Footnote> - Keep Your State Simple</span
	>
	<span slot="content">
		<div class="text-md xl-me-60 flex flex-col gap-y-4">
			<p>
				Let's face it - If you're like me and have battled the complexities of Redux or gotten lost
				in React's Context labyrinth, you know it's no walk in the park. But here's some good news:
				SvelteKit is like that cool friend who just makes things easy. And not just easy—elegant,
				too. In this article, we're going to explore why SvelteKit's approach to state management
				feels like a breath of fresh air, especially when compared to React's often convoluted
				systems.
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
				In Svelte, the joy begins with the beautifully simple syntax. There’s no JSX to wrestle with
				or "useState" and "useEffect" hooks to manage your component's lifecycle. You're working
				with something that feels like HTML, CSS, and JavaScript got together and had a lovely,
				well-behaved child. This simplicity naturally leads to intuition. You find yourself guessing
				the right way to do things, and surprisingly, you're often correct! You know that feeling
				when you're using a new app and you think, "I bet this button does X" — and it does? That's
				SvelteKit for you. Everything is where you expect it to be.
			</p>
			<p>So, let’s talk about everyone’s favorite subject - state management!</p>
			<p>
				When I was first learning Svelte, I was shocked at how simple it makes state management. In
				a React environment, the complexities of state management quickly escalate, often pushing
				developers toward cumbersome solutions like Redux or MobX. SvelteKit, however, brilliantly
				simplifies this process.
			</p>
			<p>
				Imagine a world where you don't have to call a function to change a variable and trigger a
				re-render. In Svelte, and by extension SvelteKit, all you have to do is update a
				variable—yes, a good old JavaScript variable—and the UI magically updates. It's as simple as
				prepending a variable with $: and letting Svelte do the rest<Footnote number={2}>
					Yes, it's true that as you go deeper into SvelteKit's state management, you'll come across
					the need for a more refined approach in multi-user environments. But let's be clear: the
					complexity introduced by SvelteKit Contexts is almost laughably low compared to the
					intricate setups you might find yourself tangled in with libraries like Redux. With Svelte
					Contexts, you can effortlessly isolate data to specific parts of your application,
					offering a clean and secure method to manage state.</Footnote
				>.
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
			<EssayHeading level={2}>A Quick State Management Example</EssayHeading>
			<EssayCode filename="$lib/counters.ts" code={codeBlocks.libCountersCodeBlock} />
			<p>
				Simple, right? We've just created a writable store, initialized at zero. No Redux
				boilerplate or elaborate setup; it's just JavaScript.
			</p>
			<p>
				Now, let's integrate this store into a SvelteKit page. Here's where the magic happens. In
				our page, we import the count store, then perform increments and decrements directly within
				the component.
			</p>
			<EssayCode filename="$routes/+page.svelte" code={codeBlocks.routesPageCodeBlock} />
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
			<EssayCode
				filename="$components/CounterThing.svelte"
				code={codeBlocks.counterThingCodeBlock}
			/>

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
			<p class="font-bold">
				Here's the real kicker, though. If you click the +/- buttons in the component, you'll notice
				tha the value of count earlier on the page also changes. <span class="italic">
					Simply because they use the same store.</span
				>
			</p>
			<p>
				Take a second to process that. SvelteKit doesn't just make coding easier; it makes it
				downright enjoyable. You spend less time wrestling with state management and more time
				building, well, awesome stuff!
			</p>
			<EssayHeading level={2}><span class="font-bold">MORE BUTTONS</span></EssayHeading>
			<p>
				“But wait!” - I hear you saying - “What if I want a different counter? Or a different pair
				of counters? Aren’t these store objects kinda global by nature? What if I want to scope them
				to some specific component tree like React Contexts?
			</p>
			<p>Well, my delightfully well-informed and curious friend, you’re in luck.</p>
			<p>
				In Svelte, we use Contexts to scope data to component trees. Let’s use our counter thing as
				an example.
			</p>
			<p>
				Right now, if we add a bunch more CounterThings to the page, they’ll all use the same value.
				So if I add two different groups of two counters each…
			</p>
			<EssayHr />
			<p>
				P.s. this whole website is written using SvelteKit. And it's open source! Check it out on <a
					href="https://github.com/fmdunlap/personal-site">my github.</a
				>
			</p>
			<EssayCode filename="$routes/+page.svelte" code={codeBlocks.counterGroupPageCodeBlock} />
			<EssayCode
				filename="$components/CounterGroup.svelte"
				code={codeBlocks.counterGroupUsingStoreCodeBlock}
			/>
			<p>
				What we’ve done here is create a new component - CounterGroup - that contains two
				CounterThings. CounterGroup also has a few props used to stylize their background color and
				their label value. The page now contains just two of the new CounterGroup components.
			</p>
			<p>Now if you press the ‘+’ button on any of the counters, then all of them will update!</p>
			<div class="flex flex-row">
				<CounterThingGroup groupNumber={1} useStore />
				<CounterThingGroup groupNumber={2} useStore color={'blue'} />
			</div>
			<p>
				Here’s where Svelte’s Context API comes in handy. The Context API allows us to create named
				‘Contexts’ that are only available to child components.
			</p>
			<EssayCode filename="$lib/counter_context.ts" code={codeBlocks.counterContextCodeBlock} />
			<p>
				Think of a ‘Context’ as a plain-old javascript object that maps a key (in this case counter)
				to a value (in this case the count writable). The cool thing about the Counter is that
				they’re auto-magically scoped to the parent component’s context. I.e. only the parent
				component (whoever calls setCount) and the children components (as defined by the HTML
				structure of your app) have access to the values defined in the context.
			</p>
			<p>
				To add our new context to our components, all we need to do is call setCount in the
				CounterGroup, and then we can call getCount in CounterThing to.. Uh.. get the count store.
			</p>
			<EssayCode
				filename="$components/CounterGroup.svelte"
				code={codeBlocks.counterGroupUsingContextCodeBlock}
			/>
			<EssayCode
				filename="$components/CounterThing.svelte"
				code={codeBlocks.counterThingUsingContextCodeBlock}
			/>
			<p>
				And voila! <span class="font-bold"> It's that easy!</span>
			</p>
			<div class="flex flex-row">
				<CounterThingGroup groupNumber={1} />
				<CounterThingGroup groupNumber={2} color={'blue'} />
			</div>
			<p>
				There is one caveat here, however. On their own, Contexts are not reactive. You may have
				noticed that I used a writable in the context rather than just an int. This is because if I
				had used an int, the child components would not have simply re-rendered themselves.
			</p>
			<p>
				Note, this isn’t just some quirk. It actually has really useful implications. For example,
				if I need to provide child components with some data that is only available at runtime, I
				can simply stick the data into a context, and they will display the data that is provided.
				That can be super useful when dealing with complex data that doesn’t need to change
				reactively.<Footnote number={3}>
					For example, if several components in a tree need to access some shared data. Imagine a
					piece of CRM software with a page that displays all of your clients as cards. You could
					create a ’client’ context that gets shared with all of the components within that client’s
					card and only need to pass around a single complex client object.
				</Footnote>
			</p>
			<EssayHeading level={2}>Less == More</EssayHeading>
			<p>
				In Svelte, Stores and Contexts are all you need to worry about to manage even complex state.
				Stores are the containers for reactive values that are just plain old JS/TS, and Contexts
				allow you to scope data (including Stores) to specific component trees.
			</p>
			<p>
				If you’re familiar with React, you already know how much simpler this set up is. Svelte’s
				concept of a Store eliminates the need for both useState and useEffect, and the Context lets
				you silo data in the same way that React’s Providers do — just with way less boiler plate.
				Since everything is a plain old JS/TS object, you can do whatever you want with it. The
				world is your freaking oyster.
			</p>
		</div>
	</span>
</EssayCard>
