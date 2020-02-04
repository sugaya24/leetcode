/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  for (let i = 0; i < K; i++) {
    A.sort((a, b) => a - b);
    A[0] *= -1;
  }
  return A.reduce((a, b) => a + b, 0);
};

console.log(largestSumAfterKNegations([4, 2, 3], 1)); // 5
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3)); // 6
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)); // 13
