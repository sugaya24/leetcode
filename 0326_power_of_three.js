/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  while (n >= 1) {
    if (n === 1) return true;
    n = n / 3;
  }
  return false;
};

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(45)); // false
