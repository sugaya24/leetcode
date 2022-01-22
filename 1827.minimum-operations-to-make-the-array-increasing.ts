export function minOperations(nums: number[]): number {
  let max = nums[0];
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    } else {
      max++;
      count += max - nums[i];
    }
  }
  return count;
}
