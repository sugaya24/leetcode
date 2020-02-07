/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
