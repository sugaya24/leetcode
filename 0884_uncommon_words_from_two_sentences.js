/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
function uncommonFromSentences(A, B) {
  const res = new Map();
  const arr = A.split(' ').concat(B.split(' '));
  for (const key of arr) {
    res.set(key, (res.get(key) || 0) + 1);
  }
  for (const count of res) {
    if (count[1] > 1) {
      res.delete(count[0]);
    }
  }
  return Array.from(res.keys());
}

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')); // ["sweet","sour"]
console.log(uncommonFromSentences('apple apple', 'banana')); // ["banana"]
