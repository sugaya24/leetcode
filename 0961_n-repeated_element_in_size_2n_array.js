/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let lookup = new Set();

  for (let n of A) {
    if (lookup.has(n)) return n;
    lookup.add(n);
  }

  return -1;
};

console.log(repeatedNTimes([1, 2, 3, 3]));
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
