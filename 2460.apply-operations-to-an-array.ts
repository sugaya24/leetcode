function applyOperations(nums: number[]): number[] {
  let zeros = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      zeros++;
    }
  }
  for (let i = 0; i < zeros; i++) {
    nums.push(0);
  }
  return nums;
}

export default applyOperations;
