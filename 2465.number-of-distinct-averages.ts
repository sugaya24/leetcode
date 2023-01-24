function distinctAverages(nums: number[]): number {
  const set = new Set();
  nums.sort((a, b) => a - b);
  while (nums.length > 0) {
    set.add((nums[0] + nums[nums.length - 1]) / 2);
    nums.shift();
    nums.pop();
  }
  return set.size;
}

export default distinctAverages;
