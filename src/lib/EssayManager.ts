import type { SvelteComponent } from 'svelte';
import Uncertainty from './essay/uncertainty/Uncertainty.svelte';
import SvelteKit from './essay/sveltekit/Sveltekit.svelte';

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
		title: 'The Joy of SvelteKit',
		slug: 'sveltekit-is-better',
		component: SvelteKit
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
