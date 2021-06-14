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
    let flag = true;
    for (const c of i.toString()) {
      if (i % +c !== 0) {
        flag = false;
      }
    }
    if (flag) res.push(i);
  }
  return res;
}
// @lc code=end

console.log(selfDividingNumbers(1, 22));
