<script lang="ts">
	import EssayCard from '$lib/components/essay/EssayCard.svelte';
	import EssayHeading from '$lib/components/essay/EssayHeading.svelte';
	import EssayImage from '$lib/components/essay/EssayImage.svelte';
	import EssayQuote from '$lib/components/essay/EssayQuote.svelte';
	import Why from './Why.gif';
	import EssayHr from '$lib/components/essay/EssayHR.svelte';
	import EssayList from '$lib/components/essay/EssayList.svelte';
	import MediaQuery from 'svelte-media-queries';
	import TwoButtonsHorizontal from './two_buttons_horizontal.jpeg';
	import TwoButtonsVertical from './two_buttons_vertical.jpeg';
	import EssayLi from '$lib/components/essay/EssayListItem.svelte';
	import Footnote from '$lib/components/essay/Footnote.svelte';
	import MonsterIntro from './monster_intro.png';
	import MonsterTeaching from './monster_teaching.png';
	import MonsterAngry from './monster_angry.png';
	import MonsterStaring from './monster_staring.png';
	import BarChartOne from './bar_chart_one.png';
	import BarChartTwo from './bar_chart_two.png';
	import BarChartThree from './bar_chart_three.png';

	$: matches = false;
	$: checkboxChecked = false;
</script>

<EssayCard>
	<span slot="title"> [Un]certainty is [not] the Enemy </span>
	<span slot="subtitle">
		Advice for people who often start cool projects but rarely get through them.
	</span>
	<span slot="content">
		<div class="text-md xl-me-60 flex flex-col gap-y-4">
			<EssayHeading level={1}>Intro / The Monster</EssayHeading>
			<p>I’ve got a question for you - what do the following thoughts have in common?</p>
			<EssayList>
				<li>
					“Before working on anything, I must create a business plan to know what to worry about
					later.”
				</li>
				<li>
					“When should I post this video? What day of the week? What time? If I can figure out the
					best time and day to post, I’ll totally get more views.”
				</li>
				<li>
					“The best thing for me to do next is sit down and write about the best thing to do next.”
				</li>
				<li>
					“We need a meeting to plan our meetings for next quarter to ensure we have time for
					feature design meetings to plan out what we need to build to deliver those features to our
					clients.”
				</li>
			</EssayList>
			<p>
				That last one might be a bit on the nose for anyone who has worked corporate, but do you see
				a pattern here?<Footnote number={1}>
					If the questions seem perfectly reasonable, then you are precisely the target audience for
					this article. Read on.
				</Footnote>
			</p>
			<p>
				Questions like these have often held me back in creative and professional pursuits. As soon
				as I get through the first bit of exciting work, these questions come streaming into my
				mind. Unfortunately, the longer they’re in my head, the harder it becomes to motivate myself
				to work on the project.
			</p>
			<p>
				It feels like a little monster occasionally pops up on my shoulder and begins asking all the
				“important questions.
			</p>
			<p>Actually, I like that. Let’s name it. I’ll call it “The Monster.”</p>
			<EssayImage extras="h-max sm:h-56" src={MonsterIntro} alt="An angry anxiety monster." />
			<p>
				The Monster is always around - lurking behind every deadline, project, and creative idea. So
				when I decide to write about something, The Monster pipes up and says shit like:
			</p>
			<EssayQuote
				><span class="font-bold">Monster:</span> “Is this the right thing for you to write about? Is
				there something more attention-grabbing?” … “Your argument doesn’t make sense - start over and
				re-outline the whole thing.”</EssayQuote
			>
			<p>Or - god forbid - I have some cool project or business idea:</p>
			<EssayQuote
				><span class="font-bold">Monster:</span> “Does anyone even want this? You should plan out all
				the features and contingencies and ensure that you have a clear vision. Then you should talk
				to potential customers in the problem space. And then, only once that’s done, you should start
				building something.”</EssayQuote
			>
			<p>The little pipsqueak is insufferable and virtually impossible to ignore.</p>
			<p>
				Worse yet, The Monster's arguments are often compelling. After all, if I’m going to put a
				ton of time and effort into something (like possibly years of my life), I need to have a
				pretty damn good reason for doing that. It’s irresponsible to charge forward on something
				without doing at least a little bit of homework beforehand, right? And if it makes sense to
				do some homework, shouldn’t we do all of it?
			</p>
			<EssayImage
				src={MonsterTeaching}
				extras="h-max sm:h-56"
				alt="The monster in front of a whiteboard."
				caption="This is my personal nightmare."
			/>
			<p>
				Inevitably, The Monster wins, and (assuming we don’t give up immediately) we pull out a
				piece of paper, a planner, or a blank doc and start trying to do the work that The Monster
				assigned us.
			</p>
			<p>Usually, it starts out pretty easy…</p>
			<EssayQuote>
				<span class="font-bold">Monster:</span> “Do you even know what you’re trying to make?”
				<br />
				<span class="font-bold">Me:</span> Yes. I’m writing an essay about you, actually.
			</EssayQuote>
			<p>
				And then, suddenly, the homework will morph into a set of impossible questions that has
				nothing to do with your initial task.
			</p>
			<EssayQuote>
				<span class="font-bold">Monster:</span> “Why do you think your insight is valuable? Wouldn’t
				you prefer to be playing video games? Or even making dinner? Where are you going to post
				this? What about comments? What if someone leaves a negative comment? Don’t you need to …
				<br />
				<span class="font-bold">Me:</span> Uhhh… Okay… I’m gonna go lie down now.
			</EssayQuote>
			<p>
				On the best days, The Monster distracts us from our work. On the worst days, The Monster
				makes us doubt ourselves and our abilities and trivialize the things that we create.
			</p>
			<EssayQuote>
				<span class="font-bold">Me:</span> Gah! How does anyone do anything with The Monster constantly
				breathing down their neck? I can’t just be expected to do all of the work The Monster wants me
				to do, right? That seems excessive - there’s a lot. But if I don’t do all of the anxiety monster’s
				homework, then I don’t feel I can make any progress because it makes good arguments… So what
				- I let the anxiety monster run my entire life, and that’s just how it will be? Forever?! I can’t
				do that!
			</EssayQuote>
			<EssayImage src={Why} alt="And like don't." />
			<EssayHr />
			<EssayHeading>The Monster’s Dirty Little Secret</EssayHeading>
			<p>
				There are two opposing forces at play in our minds. They’re kinda like “motivation” and
				“difficulty,” but they’re also not at all like “motivation” and “difficulty.”
			</p>
			<p>
				Let’s ditch the baggage and start with a clean slate: I’ll call them <span class="font-bold"
					>“Fuel”</span
				>
				and <span class="font-bold">“Friction.”</span>
			</p>
			<EssayQuote>
				<span class="not-italic">
					<p>
						<span class="font-bold">Friction: </span>is the effort required to get us from where we
						are to where we want to go. Every task has some amount of friction. If I want a
						sandwich, I must get up, go to the kitchen, collect the ingredients, and make it. If I
						want to write a book, I need to figure out what I want to write, outline that, start
						writing, find an editor, keep writing, get a publishing deal, and so on.
					</p>
					<p class="mt-4">
						Friction can be physical or emotional – Physical friction is the effort required to do
						things in the real world (like getting up to make a sandwich.) Emotional friction is the
						effort needed to get past insecurities or figure out what we want (like deciding what to
						write about.)
					</p>
					<p class="mt-4">
						<span class="font-bold">Fuel: </span> is the energy our minds use to motivate us to do anything.
						There are physiological fuels like hunger, thirst, and fatigue, as well as more subtle emotional
						fuels like curiosity, ambition, interest, and anxiety.
					</p>
					<p class="my-4">Without friction, fuels drive us toward action:</p>
					<EssayList>
						<li>We seek food if we have the “hunger” fuel source.</li>
						<li>
							We read and write poetry if we have the “curiosity and interest in poetry” fuel
							source.
						</li>
						<li>
							We do our taxes if we have the “I don’t want the IRS to put a warrant out for my
							arrest” fuel source.<Footnote number={2}
								>I’m still nostalgic for the time when I was curious and interested in doing my
								taxes the first time around. Novelty is a powerful drug.</Footnote
							>
						</li>
					</EssayList>
				</span>
			</EssayQuote>
			<p>
				Let’s pretend you’re starting a new Big Creative Project. You’re super duper excited about
				the project and have already started researching, sketching, coding, or whatever your Big
				Creative Project requires.
			</p>
			<EssayImage
				src={BarChartOne}
				alt="A bar chart showing on the 'friction' bar on the left, and the 'fuel' bar on the right. The fuel bar is slightly larger than the friction bar."
				caption="The wonderful beginnings of a project - where everything is green, beautiful, and blissful."
				extras="h-max sm:h-96"
			/>
			<p>
				Things are pretty effortless in the beginning. You’re probably doing the activity you enjoy
				most regarding your Big Creative Project. That means you’ve got a ton of “curiosity and
				interest” fuel to push you forward, and since you’re working on the stuff you enjoy working
				on, you’ve got very little friction.
			</p>
			<EssayImage
				src={BarChartTwo}
				alt="The bar chart again, but in this chart the anxiety monster is adding insecurities to the friction bar to make it larger than the fuel bar."
				caption="Sometimes the monster adds friction in our way when it doesn't think we'll be able to accomplish our goal."
				extras="h-max sm:h-96"
			/>
			<p>
				As the Big Creative Project progresses, other tasks require your attention. Unfortunately,
				these tasks aren’t as fun, and maybe you’re not as secure in your abilities with these
				different tasks. As a result, friction creeps up, making it harder for you to move the
				project forward.
			</p>
			<EssayImage
				src={BarChartThree}
				alt="The bar chart again, but in the chart the anxiety monster has added anxiety, shame, and ambition to the fuel bar to make it larger than the friction bar"
				caption="This is like. Totally sustainable. Definitely."
				extras="h-max sm:h-96"
			/>
			<p>
				This is it! This is where The Monster comes in! The Monster is good at playing mind games<Footnote
					number={3}
					>In fact, it’s just as good at playing mind games as you are because - fun fact - <a
						href="https://www.youtube.com/watch?v=b1kbLwvqugk"
						class="text-blue-700 underline"
						target="_blank"
					>
						you’re the monster. It’s you.</a
					>
				</Footnote>, and it has figured out how to manipulate our fuel sources and sense of friction
				to influence our behaviors.
			</p>
			<p>
				When failing a task doesn’t have consequences, The Monster gladly gives us an excuse so that
				we don’t have to do the work in the first place. We get to carry on with our lives (and
				egos) intact, even if the course of action would have resulted in failure.
			</p>
			<!-- <p class="font-bold">MORE INFORMATION ABOUT "FAKE FRICTION"/"INSECURE FRICTION" HERE.</p> -->
			<p>A big downside, though - burning that extra-special fuel makes us feel downright awful.</p>
			<MediaQuery query="(max-width: 480px)" bind:matches>
				{#if matches}
					<EssayImage src={TwoButtonsVertical} alt="A rouch choice" />
				{:else}
					<EssayImage src={TwoButtonsHorizontal} alt="A rouch choice" />
				{/if}
			</MediaQuery>
			<p>
				If you think about the world from The Monster’s perspective, the situation becomes pretty
				clear - The Monster is just trying to protect us. It makes sure that we’ll be okay if
				something in the future might try and hurt us.
			</p>
			<EssayHr />
			<EssayQuote
				><span class="font-bold">Me, and maybe you: </span>Who cares if it’s acting in my best
				interests! I still want to make cool stuff, and this dang Monster is always on my case!</EssayQuote
			>
			<p>
				Yeah, yeah, yeah. I get it. Even though The Monster has good intentions, its actions are
				damaging.
			</p>
			<p>
				If we want to live happier, healthier, more productive lives, we must do something about the
				monster.
			</p>
			<p class="font-bold italic">We can stare at The Monster.</p>
			<EssayImage
				src={MonsterStaring}
				alt="A stick figure staring at the anxiety monster."
				extras="h-max sm:h-56"
			/>
			<p>
				Not literally, of course. There’s no actual monster to stare at. However, we can improve our
				awareness of when and how the monster messes with our fuel sources.
			</p>
			<p>
				Let’s force the monster to come out into the light. From there, we can examine how it
				affects our thoughts and feelings.
			</p>
			<p class="font-bold">Here's how:</p>
			<EssayList numbered>
				<EssayLi>
					Get some paper and something to write with. <Footnote number={4}>
						Or a whiteboard, a journal, a word doc, a sharpie and the decommissioned body of a 737
						MAX. Whatever floats your boat.
					</Footnote>
				</EssayLi>
				<EssayLi>
					Think of a project or task or something that you’ve been working on - we’ll call it your
					“struggle-project.” I’ll give you extra brownie points if the project is something you’ve
					been procrastinating or avoiding.
				</EssayLi>
				<EssayLi>
					Answer the following questions:<br />
					<EssayList>
						<EssayLi>What's keeping you from working on it?</EssayLi>
						<EssayLi>Do you still want to work on it? Why or why not?</EssayLi>
						<EssayLi>
							Is there something you need to do or know before you put more effort into it? Why
							would doing or knowing that thing help?
						</EssayLi>
					</EssayList>
				</EssayLi>
			</EssayList>
			<div class="rounded-xl bg-red-200 p-6">
				<p class="mb-2 text-xl"><span class="font-bold">IMPORTANT</span></p>
				<p>
					<span class="font-bold">Don't walk away right now! </span>You might be coming up with
					reasons to close this article. Maybe you’re getting bored. Perhaps you don’t have a piece
					of paper.
					<span class="font-bold"
						>That feeling is your monster, trying to prevent you from doing the work.
					</span> This will only take a few minutes - pinky promise.
				</p>
			</div>
			<EssayHr />
			<p>If you’re still here - hooray!</p>
			<p>
				Assuming you did the exercise while focusing on your struggle-project, your monster might be
				actively throwing a fit.
			</p>
			<EssayImage src={MonsterAngry} alt="a cat" extras="h-max sm:h-56" />
			<p>
				Ask yourself - is The Monster adding extra-special (dirty) fuel to your engine so you’ll
				work harder? Or is it making the project seem impossible and providing excuses so you don’t
				feel bad about not working on your struggle-project?
			</p>
			<EssayList numbered>
				<EssayLi>
					<span class="font-bold">Extra-Special Fuel: </span>Are you having anxious thoughts or
					feelings of ambition, making it easier to push through difficulty? Do any of the following
					thoughts resonate with you?
					<EssayList>
						<EssayLi>
							“I have to do my struggle-project, or else bad things will happen! Danger!”
						</EssayLi>
						<EssayLi>“If I want to be successful, I must do my struggle-project”</EssayLi>
						<EssayLi>
							“What kind of a person would I be if I didn’t do my struggle-project?!”
						</EssayLi>
					</EssayList>
				</EssayLi>
				<EssayLi>
					<span class="font-bold">Fake Friction: </span>Is The Monster making your struggle-project
					seem impossible? Or maybe it’s making your struggle-project seem trivial and not worth the
					effort? These feelings usually manifest as tiredness or boredom with your project.
				</EssayLi>
			</EssayList>
			<p>
				Sit with the feeling for a moment. Don’t try to change, run from, or otherwise suppress it.
				Just observe it. <Footnote number={5}>
					For brownie points, use the paper (or decommissioned 737 MAX) from earlier to write down
					what you’re feeling. Next time you’re working on your project, review what you wrote and
					reflect on it.
				</Footnote> After a while, the feeling should diminish a bit. <Footnote number={6}>
					Maybe do some <a
						href="https://images.squarespace-cdn.com/content/v1/5b8645f7266c07b084eb29c7/1570208020992-TRZCAX5P0A53CG0LS5AO/Box+breathing.gif?format=1000w"
						class="text-blue-700 underline"
						target="_blank"
					>
						box breathing
					</a> while you’re here.
				</Footnote>
			</p>
			<p>
				When you’re ready, review what you wrote earlier. As you read, notice which parts make The
				Monster return to the surface. Why?
			</p>
			<p>
				Try to understand the insecurity that The Monster is protecting you from. This will be
				difficult at first, but it gets easier with time. Sometimes all you have to do is flip the
				feeling on its head; if you’re anxious, ask yourself what you’re anxious about. If you’re
				tired, ask yourself why. <Footnote number={7}>
					Tiredness is an emotion and a physical thing! It’s both! The monster takes advantage of
					tiredness by making you feel like your struggle-project isn’t worth doing & won’t be worth
					the effort.
				</Footnote>
			</p>
			<p>
				The funny thing about our insecurities is that they lose their power once we know what they
				are. Right now, I’m afraid to publish this article because I mistakenly derive my own value
				from the value of what I produce. Ergo, I have no value if no one finds any value in this
				article. Simply knowing that and being able to observe my own insecurity takes its power
				away.
			</p>
			<p>
				Next time you work on one of your struggle-projects, notice when The Monster gets involved.
				Ask why it’s making you feel that way. Consider journaling about it. Then decide what to do
				next without letting The Monster take over.
			</p>
		</div>
	</span>
</EssayCard>
