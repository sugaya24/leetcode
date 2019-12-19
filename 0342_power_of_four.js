/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  while (num >= 1) {
    if (num === 1) return true;
    num /= 4;
  }
  return false;
};

console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
