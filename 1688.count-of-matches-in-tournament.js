/**
 * @param {number} n
 * @return {number}
 */
function numberOfMatches(n) {
  if (n === 1) return n - 1;

  if (isEven(n)) {
    return n / 2 + numberOfMatches(n / 2);
  } else {
    return Math.floor(n / 2) + 1 + numberOfMatches(Math.floor(n / 2));
  }
}

const isEven = (n) => {
  return n % 2 === 0;
};

console.log(numberOfMatches(5)); //4
console.log(numberOfMatches(7)); //6
console.log(numberOfMatches(14)); //13
