/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
function countConsistentStrings(allowed, words) {
  const set = new Set();
  let count = 0;
  for (const s of allowed) {
    set.add(s);
  }
  for (const word of words) {
    let flag = true;
    for (const s of word) {
      if (!set.has(s)) {
        flag = false;
        break;
      }
    }
    if (flag) count++;
  }
  return count;
}

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']));
console.log(
  countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])
);
