/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  let cur = nums.length - 1;
  while (k--) {
    nums.unshift(nums[cur]);
    nums.pop();
  }
}

rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]
rotate([-1, -100, 3, 99], 2); // [3, 99, -1, -100]
