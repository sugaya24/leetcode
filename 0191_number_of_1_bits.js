/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let result = 0;
  for (i = 0; i < n.toString(2).length; i++) {
    if (n.toString(2)[i] === '1') result++;
  }
  return result;
};
console.log(hammingWeight(0b00000000000000000000000000001011)); // 3
console.log(hammingWeight(0b00000000000000000000000010000000)); // 1
console.log(hammingWeight(0b11111111111111111111111111111101)); // 31
