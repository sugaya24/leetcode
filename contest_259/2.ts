function sumOfBeauties(nums: number[]): number {
  let leftMin = [],
    rightMax = [];
  leftMin[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    leftMin[i] = Math.max(nums[i], leftMin[i - 1]);
  }
  rightMax[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    rightMax[i] = Math.min(nums[i], rightMax[i + 1]);
  }

  let ans = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (leftMin[i - 1] < nums[i] && nums[i] < rightMax[i + 1]) {
      ans += 2;
    } else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
      ans += 1;
    }
  }
  return ans;
}

// console.log(sumOfBeauties([1, 2, 3])); // 2
// console.log(sumOfBeauties([2, 4, 6, 4])); // 1
// console.log(sumOfBeauties([3, 2, 1])); // 0
// console.log(sumOfBeauties([1, 2, 3, 4, 5, 7, 8, 9, 10])); // 14
