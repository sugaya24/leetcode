/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// using binary search
var searchInsert = function(nums, target) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return target <= nums[0] ? 0 : 1;
  // binary search
  let start = 0;
  let end = nums.length;
  while (start < end) {
    const pos = Math.floor((start + end) / 2);
    if (nums[pos] === target) return pos;
    if (nums[pos] < target) {
      start = pos + 1;
    } else if (target < nums[pos]) {
      end = pos;
    }
  }
  return start;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([], 0)); // 0
console.log(searchInsert([1], 1)); // 1
