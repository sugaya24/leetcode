/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  num = num
    .toString(2)
    .split('')
    .map((n) => (n == 0 ? 1 : 0));

  return parseInt(num.join(''), 2);
};

console.log(findComplement(5));
