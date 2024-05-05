export function minimumOperationsToMakeKPeriodic(
  word: string,
  k: number
): number {
  const map = new Map();
  let max = 0;
  for (let i = 0; i < word.length - k + 1; i += k) {
    map.set(word.slice(i, i + k), (map.get(word.slice(i, i + k)) || 0) + 1);
    max = Math.max(max, map.get(word.slice(i, i + k)));
  }
  return word.length / k - max;
}
