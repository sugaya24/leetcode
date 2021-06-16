/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
function countConsistentStrings(allowed, words) {
  const set = new Set(allowed);
  let count = 0;
  outer: for (const word of words) {
    for (const s of word) {
      if (!set.has(s)) continue outer;
    }
    count++;
  }
  return count;
}

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']));
console.log(
  countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])
);
