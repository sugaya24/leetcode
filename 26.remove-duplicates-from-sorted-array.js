/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) nums[++i] = nums[j];
  }
  return ++i;
};
// @lc code=end
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
