/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
      nums.splice(i, 1);
      i--;
    }
  }
  while (zeroCount--) {
    nums.push(0);
  }
}

// moveZeroes([0, 1, 0, 3, 12]);
// moveZeroes([1, 2, 3]);
// moveZeroes([0, 0, 1]);
