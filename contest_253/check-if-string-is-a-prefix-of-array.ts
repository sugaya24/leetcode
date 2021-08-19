function isPrefixString(s: string, words: string[]): boolean {
  // wordsを頭からjoinしていってsと同じになればtrue
  // joinした結果がs.lengthより長くなればfalse
  let str = '';
  for (let i = 0; i < words.length; i++) {
    str += words[i];
    if (str.length > s.length) return false;
    if (str === s) return true;
  }
  return false;
}

console.log(
  isPrefixString('iloveleetcode', ['i', 'love', 'leetcode', 'apples'])
);
console.log(
  isPrefixString('iloveleetcode', ['apples', 'i', 'love', 'leetcode'])
);
