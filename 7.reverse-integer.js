/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  let res = Math.abs(x)
    .toString()
    .split('')
    .reverse()
    .join('');

  return -(2 ** 31) < res && res < 2 ** 31 - 1 ? Math.sign(x) * +res : 0;
}
// @lc code=end

console.log(reverse(-123));
console.log(reverse(123));
console.log(reverse(120));
