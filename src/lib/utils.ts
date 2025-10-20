import type { Entry } from "@/lib/types";

export function secondsToString(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function calculateTotalDuration(entries: Entry[]): number {
  return entries.reduce((sum, entry) => {
    return sum + entry.duration;
  }, 0);
}