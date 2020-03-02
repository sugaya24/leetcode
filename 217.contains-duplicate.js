/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) {
      return true;
    } else {
      set.add(n);
    }
  }
  return false;
}
// @lc code=end
