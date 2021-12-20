export function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();
  for (const s of word1) {
    if (map1.get(s)) {
      map1.set(s, map1.get(s)! + 1);
    } else {
      map1.set(s, 1);
    }
  }
  for (const s of word2) {
    if (map2.get(s)) {
      map2.set(s, map2.get(s)! + 1);
    } else {
      map2.set(s, 1);
    }
  }
  for (const [s, n] of map1.entries()) {
    if ((!map2.get(s) && n > 3) || Math.abs(n - map2.get(s)!) > 3) {
      return false;
    }
  }
  for (const [s, n] of map2.entries()) {
    if ((!map1.get(s) && n > 3) || Math.abs(n - map1.get(s)!) > 3) {
      return false;
    }
  }
  return true;
}
