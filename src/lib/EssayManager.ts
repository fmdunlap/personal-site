import type { SvelteComponent } from 'svelte';
import Uncertainty from './essay/uncertainty/Uncertainty.svelte';
import SveltekitState from './essay/sveltekit-state/SveltekitState.svelte';

export type Essay = {
	title: string;
	slug: string;
	component: typeof SvelteComponent;
};

export const essays: Essay[] = [
	{
		title: '[Un]Certainty is [not] the Enemy',
		slug: 'uncertainty',
		component: Uncertainty
	},
	{
		title: 'KYSS: Keep Your State Simple',
		slug: 'KYSS',
		component: SveltekitState
	}
];

export function getEssay(slug: string): Essay | null {
	for (let i = 0; i < essays.length; i++) {
		if (essays[i].slug == slug) {
			return essays[i];
		}
	}
	return null;
}
