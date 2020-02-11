/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = (n) => {
  n = n ^ (n >> 1);
  return (n & (n + 1)) === 0;
};

console.log(hasAlternatingBits(5)); // True
console.log(hasAlternatingBits(7)); // False
console.log(hasAlternatingBits(11)); // False
console.log(hasAlternatingBits(10)); // True
console.log(hasAlternatingBits(87381)); // True
