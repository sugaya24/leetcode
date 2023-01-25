function similarPairs(words: string[]): number {
  const arr = words.map((word) => [...new Set(word)].sort().join());
  let count = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
  }
  return count;
}

export default similarPairs;
