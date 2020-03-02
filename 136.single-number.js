/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  return (
    2 * [...new Set(nums)].reduce((a, b) => a + b) -
    nums.reduce((a, b) => a + b)
  );
}
// @lc code=end
