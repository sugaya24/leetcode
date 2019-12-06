/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let countR = 0;
  let countL = 0;
  let result = 0;
  const array = s.split('');
  array.forEach(str => {
    if (str === 'R') {
      countR++;
    } else if (str === 'L') {
      countL++;
    }
    if (countR === countL) {
      result++;
    }
  });
  return result;
};

console.log(balancedStringSplit('RLRRLLRLRL')); // 4
console.log(balancedStringSplit('RLLLLRRRLR')); // 3
console.log(balancedStringSplit('LLLLRRRR')); // 1
console.log(balancedStringSplit('RLRRRLLRLL')); // 2
