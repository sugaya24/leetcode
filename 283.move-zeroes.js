/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[count], nums[i]] = [nums[i], nums[count]];
      count++;
    }
  }
  return nums;
};
// @lc code=end

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 1]));
console.log(moveZeroes([0]));
console.log(moveZeroes([1]));
console.log(moveZeroes([2, 1]));
console.log(moveZeroes([0, 0, 1]));
