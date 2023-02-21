function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const threeSum = nums[i] + nums[left] + nums[right];
      if (threeSum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      } else if (threeSum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
}

export default threeSum;
