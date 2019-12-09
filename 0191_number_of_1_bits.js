/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  return n.toString(2).replace(/0/g, '').length;
};
console.log(hammingWeight(0b00000000000000000000000000001011)); // 3
console.log(hammingWeight(0b00000000000000000000000010000000)); // 1
console.log(hammingWeight(0b11111111111111111111111111111101)); // 31
