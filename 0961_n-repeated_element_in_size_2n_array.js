/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let counts = {};
  for (var i = 0; i < A.length; i++) {
    var num = A[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  for (const count in counts) {
    if (counts[count] === A.length / 2) {
      return count;
    }
  }
};

console.log(repeatedNTimes([1, 2, 3, 3]));
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
