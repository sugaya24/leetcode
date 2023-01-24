function oddString(words: string[]): string {
  const map = new Map();
  const ans = new Map();
  for (const word of words) {
    let key = '';
    for (let i = 0; i < word.length - 1; i++) {
      key += `_${word[i + 1].charCodeAt(0) - word[i].charCodeAt(0)}`;
    }
    map.set(key, map.get(key) + 1 || 1);
    ans.set(key, word);
  }
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      return ans.get(key);
    }
  }
  return '';
}

export default oddString;
