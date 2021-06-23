function makeEqual(words: string[]): boolean {
  const map = new Map();
  for (const word of words) {
    for (const c of word) {
      map.set(c, map.get(c) + 1 || 1);
    }
  }
  for (const c of map) {
    if (c[1] % words.length !== 0) return false;
  }
  return true;
}

console.log(makeEqual(['abc', 'aabc', 'bc']));
console.log(makeEqual(['ab', 'a']));
