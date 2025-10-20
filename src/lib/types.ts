export interface Entry {
  order: number;
  duration: number;
  title: string;
  owner: string;
}

export interface Prompter {
  duration: string;
  title: string;
  owner: string;
  timer: number;
}

export interface GlobalState {
  isPlaying: boolean;
  currentEntry: number;
  timer: number;
  duration: number;
}