/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  for (let a = 0; a ** 2 < c; a++) {
    b = c - a ** 2;
    i = 1;
    sum = 0;
    while (sum < b) {
      sum += i;
      i += 2;
    }
    if (sum == b) {
      return true;
    }
    return false;
  }
  // for (let n = 0; n <= Math.sqrt(c); n++) {
  //   if (Math.sqrt(c - n ** 2) % 1 === 0) {
  //     return true;
  //   }
  // }
  // return false;
};
