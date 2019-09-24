/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // newArray = nums.filter((elem, index, self) => self.indexOf(elem) === index);
  // return newArray.length;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      // console.log(nums[i], nums[j]);
      if (i !== j) {
        if (nums[i] === nums[j]) {
          nums.splice(j, 1);
        }
      }
    }
  }
  return nums.length;
};

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// removeDuplicates(nums);
console.log(removeDuplicates(nums));
