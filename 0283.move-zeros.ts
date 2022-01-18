/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[cur] = nums[i];
      nums[i] = cur === i ? nums[i] : 0;
      cur++;
    }
  }
}

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([1, 2, 3]);
