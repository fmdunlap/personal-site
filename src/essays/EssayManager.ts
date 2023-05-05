import type { SvelteComponent } from "svelte";
import Uncertainty from "./Uncertainty.svelte";
import TestEssay from "./TestEssay.svelte";

export type Essay = {
    title: string;
    slug: string;
    component: typeof SvelteComponent;
};

export const essays: Essay[] = [
    {
        title: '[Un]Certainty is [not] the Enemy',
        slug: 'uncertainty',
        component: Uncertainty,
    },
    {
        title: 'Test Essay 1',
        slug: 'test-essay-1',
        component: TestEssay
    },
    {
        title: 'Test Essay 2',
        slug: 'test-essay-2',
        component: TestEssay
    },
    {
        title: 'Test Essay 3',
        slug: 'test-essay-3',
        component: TestEssay
    },
];

export function getEssay(slug: string): Essay | null {
    for (let i = 0; i < essays.length; i++) {
        if (essays[i].slug == slug) {
            return essays[i];
        }
    }
    return null;
}