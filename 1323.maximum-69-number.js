/*
 * @lc app=leetcode id=1323 lang=javascript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
function maximum69Number(num) {
  return num.toString().replace('6', '9');
}
// @lc code=end

console.log(maximum69Number(9669));
