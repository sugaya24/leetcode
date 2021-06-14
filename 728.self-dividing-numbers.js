/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function selfDividingNumbers(left, right) {
  const res = [];
  for (let i = left; i <= right; i++) {
    let digits = i;
    let valid = true;
    while (digits > 1) {
      let lastDigit = digits % 10;
      if (!lastDigit || i % lastDigit !== 0) {
        valid = false;
        break;
      }
      digits = Math.floor(digits / 10);
    }
    if (valid) res.push(i);
  }
  return res;
}
// @lc code=end

console.log(selfDividingNumbers(1, 22));
