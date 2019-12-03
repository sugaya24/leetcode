/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    var tmp = nums.pop();
    nums.unshift(tmp);
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
