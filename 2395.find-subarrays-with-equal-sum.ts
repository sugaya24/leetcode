function findSubarrays(nums: number[]): boolean {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const sum = nums[i] + nums[i + 1];
    if (set.has(sum)) {
      return true;
    } else {
      set.add(sum);
    }
  }
  return false;
}

export default findSubarrays;
