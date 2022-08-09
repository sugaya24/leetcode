/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  for (let lastNonZeroFoundAt = 0, i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const tmp = nums[lastNonZeroFoundAt];
      nums[lastNonZeroFoundAt++] = nums[i];
      nums[i] = tmp;
    }
  }
}
