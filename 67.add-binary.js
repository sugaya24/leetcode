/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0;
  let res = '';

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    let num1 = +a[i] || 0;
    let num2 = +b[j] || 0;
    let sum = num1 + num2 + carry;

    carry = sum > 1;
    res = (sum % 2) + res;
    i--;
    j--;
  }

  return res;
};
// @lc code=end
