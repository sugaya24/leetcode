/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    const start = i - k < 0 ? 0 : i - k;
    const end = k + i;
    const range = nums.slice(start, end);
    if (range.indexOf(nums[i]) !== range.lastIndexOf(nums[i])) return true;
  }
  return false;
}
// @lc code=end

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
