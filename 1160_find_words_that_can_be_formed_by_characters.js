/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  let res = 0;
  chars = chars.split('');
  const countChars = (str) => {
    const counts = new Map();
    for (const s of str) {
      counts.set(s, (counts.get(s) || 0) + 1);
    }
    return counts;
  };
  for (const word of words) {
    let flag = true;
    for (const count of countChars(word)) {
      if (
        !countChars(chars).get(count[0]) ||
        count[1] > countChars(chars).get(count[0])
      ) {
        flag = false;
        break;
      }
    }
    if (flag) res += word.length;
  }
  return res;
}

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach')); // 6
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')); // 10
