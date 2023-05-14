import type { SvelteComponent } from 'svelte';
import Uncertainty from './essay/uncertainty/Uncertainty.svelte';

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
