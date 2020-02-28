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
  let res = num.toString().split('');
  let flag = true;
  for (let i = 0; i < res.length; i++) {
    if (flag && res[i] === '6') {
      res[i] = 9;
      flag = false;
    } else {
      res[i] = Number(res[i]);
    }
  }
  return res.join('');
}
// @lc code=end

console.log(maximum69Number(9669));
