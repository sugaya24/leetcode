/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1;
  while (i >= 0) {
    if (digits[i] !== 9) {
      digits[i]++;
      break;
    } else {
      digits[i] = 0;
      if (i === 0) digits.unshift(1);
      i--;
    }
  }
  return digits;
};
// @lc code=end

console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 3, 9]));
console.log(plusOne([9]));
