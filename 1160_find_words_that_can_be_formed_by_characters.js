/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  let res = 0;
  const count = [];
  for (const char of chars) {
    count[char] = count[char] = (count[char] || 0) + 1;
  }
  for (const word of words) {
    const wordCount = [];
    let structurable = true;
    for (const char of word) {
      wordCount[char] = (wordCount[char] || 0) + 1;
      if (!count[char] || wordCount[char] > count[char]) {
        structurable = false;
        break;
      }
    }
    if (structurable) res += word.length;
  }
  return res;
}

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach')); // 6
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')); // 10
