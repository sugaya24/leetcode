/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = new Map();
  const cs = (n) => {
    if (!memo.has(n)) {
      const res = n < 2 ? 1 : cs(n - 2) + cs(n - 1);
      memo.set(n, res);
    }
    return memo.get(n);
  };
  return cs(n);
};
// @lc code=end
