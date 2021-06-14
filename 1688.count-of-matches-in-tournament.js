/**
 * @param {number} n
 * @return {number}
 */
function numberOfMatches(n) {
  let matchesCount = 0;
  while (n > 1) {
    if (isEven(n)) {
      matchesCount += n / 2;
      n /= 2;
    } else {
      matchesCount += Math.floor(n / 2);
      n = Math.floor(n / 2) + 1;
    }
  }
  return matchesCount;
}

const isEven = (n) => {
  return n % 2 === 0;
};

console.log(numberOfMatches(5)); //4
console.log(numberOfMatches(7)); //6
console.log(numberOfMatches(14)); //13
