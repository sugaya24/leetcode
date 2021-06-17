/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function truncateSentence(s, k) {
  let spaceCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' && ++spaceCount === k) return s.slice(0, i);
  }
  return s;
}

console.log(truncateSentence('Hello how are you Contestant', 4));
console.log(truncateSentence('chopper is not a tanuki', 5));
