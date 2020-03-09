/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
function NumArray(nums) {
  this.sums = [0];
  let sum = 0;
  for (const n of nums) {
    sum += n;
    this.sums.push(sum);
  }
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sums[j + 1] - this.sums[i];
};

const arr = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(arr.sumRange(0, 2));
console.log(arr.sumRange(2, 5));
console.log(arr.sumRange(0, 5));
console.log(arr.sums);

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end
