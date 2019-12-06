/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  const num = 2;
  for (let i = 0; num ** i <= n; i++) {
    console.log(num ** i);

    if (num ** i === n) {
      return true;
    }
  }
  return false;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));
