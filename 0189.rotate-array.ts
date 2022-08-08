/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  k %= nums.length;
  reverseNums(nums, 0, nums.length - 1);
  reverseNums(nums, 0, k - 1);
  reverseNums(nums, k, nums.length - 1);
}

function reverseNums(nums: number[], start: number, end: number) {
  while (start < end) {
    const tmp = nums[start];
    nums[start] = nums[end];
    nums[end] = tmp;
    start++;
    end--;
  }
}
// export function rotate(nums: number[], k: number): void {
//   const len = nums.length;
//   k %= len;
//   for (let i = 0; i < k; i++) {
//     const tmp = nums[len - 1];
//     nums.unshift(tmp);
//     nums.pop();
//   }
// }
