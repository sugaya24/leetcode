/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let result = 0;
  let tmp = 0;
  const obj = new Object();
  for (let i = 0, j = nums.length; i < j; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
  }
  for (const key of Object.keys(obj)) {
    if (tmp < obj[key]) {
      tmp = obj[key];
      result = key;
    }
  }

  return result;
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
