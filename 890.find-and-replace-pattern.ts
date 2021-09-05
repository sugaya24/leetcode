function findAndReplacePattern(words: string[], pattern: string): string[] {
  // dictionaryにpatternの文字を一つずつ入れていく
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    const map = new Map();
    let isMatched = true;
    for (let j = 0; j < words[i].length; j++) {
      // patternの文字がmapの中に存在したら、valueを確認する
      if (map.get(pattern[j])) {
        if (map.get(pattern[j]) !== words[i][j]) isMatched = false;
      } else {
        // 存在しなければ、mapにkeyとvalueを追加する
        map.set(pattern[j], words[i][j]);
      }
    }
    const values = [...map.values()];
    values.forEach((value) => {
      if (values.indexOf(value) !== values.lastIndexOf(value)) {
        isMatched = false;
      }
    });
    if (isMatched) ans.push(words[i]);
  }
  return ans;
}

// console.log(
//   findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')
// );
// console.log(findAndReplacePattern(['a', 'b', 'c'], 'a'));
// console.log(findAndReplacePattern(['ab', 'cd', 'fe', 'gg'], 'ab'));
