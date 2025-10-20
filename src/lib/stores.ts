import { type Writable, writable } from "svelte/store";
import type { Entry, GlobalState, Prompter } from "@/lib/types";
import { entries as mockEntries } from "@/lib/mock-entries";

export const globalState: Writable<GlobalState> = writable({
  isPlaying: false,
  currentEntry: 0,
  timer: 0,
  duration: 0
});

export const entries: Writable<Entry[]> = writable(mockEntries);

export const currentEntry: Writable<Prompter | null> = writable(null);
export const nextEntry: Writable<Prompter | null> = writable(null);