import { writable } from "svelte/store";

export const randomStore = writable(Math.random());

// randomStore.subscribe((v) => v + 1);
// randomStore.update((v) => v + 1);
