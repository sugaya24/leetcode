/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // newArray = nums.filter((elem, index, self) => self.indexOf(elem) === index);
  // return newArray.length;
  if (nums.length === 0) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

// nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// nums = [1, 1, 1];
// nums = [0, 0, 0, 0, 0];
nums = [1, 1, 2];
// removeDuplicates(nums);
console.log(removeDuplicates(nums));
