/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  // solution 1
  // for (let i = 0; i < k; i++) {
  //   nums.unshift(nums.pop());
  // }
  // return nums;
  // solution 2
  // nums.unshift(...nums.splice(nums.length - k));
  // return nums;
  // solution 3
  const l = nums.length;
  let index = -1;
  let count = 0;
  while (count < l) {
    let current = ++index;
    let prev = nums[current];
    do {
      const nextIdx = (current + k) % l;
      // console.log(
      //   [nums[nextIdx], prev, current],
      //   [prev, nums[nextIdx], nextIdx]
      // );
      console.log(nums);
      [nums[nextIdx], prev, current] = [prev, nums[nextIdx], nextIdx];
      count++;
    } while (index !== current);
  }
  return nums;
}
// @lc code=end

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
