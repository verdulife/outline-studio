import { writable } from "svelte/store";
import { entries as mockEntries } from "@/lib/mock-entries";

export const state = writable({
  isPlaying: false,
  currentEntry: 0,
  timer: 0,
});

export const entries = writable(mockEntries);