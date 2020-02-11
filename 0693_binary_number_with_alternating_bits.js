/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = (n) => {
  const binary = n.toString(2);
  for (let i = 0; i < binary.length; i++) {
    if (
      (i % 2 === 0 && binary[i] !== '1') ||
      (i % 2 === 1 && binary[i] !== '0')
    )
      return false;
  }
  return true;
};

console.log(hasAlternatingBits(5)); // True
console.log(hasAlternatingBits(7)); // False
console.log(hasAlternatingBits(11)); // False
console.log(hasAlternatingBits(10)); // True
console.log(hasAlternatingBits(87381)); // True
