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
    String(i)
      .split('')
      .every((num) => +num && !(i % num)) && res.push(i);
  }
  return res;
}
// @lc code=end

console.log(selfDividingNumbers(1, 22));
