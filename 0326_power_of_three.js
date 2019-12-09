/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  const num = 3;
  for (let i = 0; num ** i <= n; i++) {
    if (num ** i === n) return true;
  }
  return false;
};

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(45)); // false
