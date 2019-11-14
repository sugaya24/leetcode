/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxTotal = nums[0],
    sum = 0;
  for (let num of nums) {
    sum += num;
    if (maxTotal < sum) {
      maxTotal = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxTotal;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
