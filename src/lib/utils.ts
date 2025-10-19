export function stringToSeconds(duration: string): number {
  const [minutes, seconds] = duration.split(':').map(Number);
  return minutes * 60 + seconds;
}

export function secondsToString(totalSeconds: number): string {
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function calculateTotalDuration(entries: { duration: string }[]): string {
  const totalSeconds = entries.reduce((sum, entry) => {
    return sum + stringToSeconds(entry.duration);
  }, 0);

  return secondsToString(totalSeconds);
}