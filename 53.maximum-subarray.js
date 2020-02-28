/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let maxTotal = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (maxTotal < sum) maxTotal = sum;
    if (sum < 0) sum = 0;
  }
  return maxTotal;
}
// @lc code=end
