function minMaxGame(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0) {
      nums[i] = Math.min(nums[i], nums[i + 1]);
    } else {
      nums[i] = Math.max(nums[i], nums[i + 1]);
    }
    nums.splice(i + 1, 1);
  }
  return minMaxGame(nums);
}

export default minMaxGame;
