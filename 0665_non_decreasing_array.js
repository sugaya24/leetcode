/**
 * @param {number[]} nums
 * @return {boolean}
 */
function checkPossibility(nums) {
  let flag = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] > nums[i] && flag) {
      return false;
    }
    if (nums[i - 1] > nums[i]) {
      flag = true;
      if (nums[i - 2] > nums[i]) {
        nums[i] = nums[i - 1];
      }
    }
  }
  return true;
}

console.log(checkPossibility([4, 2, 3])); // true
console.log(checkPossibility([4, 2, 1])); // false
console.log(checkPossibility([3, 4, 2, 3])); // false
console.log(checkPossibility([5, 4, 7, 6])); // false
console.log(checkPossibility([1, 1])); // true
console.log(checkPossibility([5, 6, 1, 8])); // true
// console.log(checkPossibility([5, 5, 3, 5])); // true?

// max よりも下が2回きたらfalse
// downCount が1未満
