/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
function uncommonFromSentences(A, B) {
  const res = new Set();
  const set = new Set();
  const combined = A.split(' ').concat(B.split(' '));
  for (const word of combined) {
    if (set.has(word)) {
      res.delete(word);
    } else {
      set.add(word);
      res.add(word);
    }
  }
  return Array.from(res);
}

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')); // ["sweet","sour"]
console.log(uncommonFromSentences('apple apple', 'banana')); // ["banana"]
