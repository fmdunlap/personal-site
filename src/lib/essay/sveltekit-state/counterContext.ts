import { getContext, setContext } from 'svelte';
import { type Writable, writable } from 'svelte/store';

export function getCount(): Writable<number> {
	return getContext('count');
}

export function setCount() {
	let count = writable(0);
	setContext('count', count);
}
