export function areOccurrencesEqual(s: string): boolean {
  const charMap = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    charMap.set(s[i], charMap.get(s[i]) + 1 || 1);
  }
  const set = new Set<number>(charMap.values());
  return set.size === 1;
}
