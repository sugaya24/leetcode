/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function truncateSentence(s, k) {
  return s.split(' ').splice(0, k).join(' ');
}

console.log(truncateSentence('Hello how are you Contestant', 4));
console.log(truncateSentence('chopper is not a tanuki', 5));
