/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  if (nums.indexOf(0) < 0) {
    return;
  }
  let slow = 0,
    fast = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const tmp = nums[fast];
      nums[fast] = nums[slow];
      nums[slow] = tmp;
      slow++;
      fast = i + 1;
    } else {
      fast++;
    }
  }
}
