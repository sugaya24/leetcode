function similarPairs(words: string[]): number {
  let count = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isSimilarWords(words[i], words[j])) {
        count++;
      }
    }
  }
  return count;
}

function isSimilarWords(word1: string, word2: string): boolean {
  const set1 = new Set(word1.split(''));
  const set2 = new Set(word2.split(''));
  if (set1.size !== set2.size) {
    return false;
  }
  for (const c of set1) {
    if (!set2.has(c)) {
      return false;
    }
  }
  return true;
}

export default similarPairs;
