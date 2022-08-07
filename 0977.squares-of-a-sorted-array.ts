export function sortedSquares(nums: number[]): number[] {
  const ans: number[] = [];
  let left = 0,
    right = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (Math.pow(nums[left], 2) <= Math.pow(nums[right], 2)) {
      ans.unshift(Math.pow(nums[right], 2));
      right--;
    } else {
      ans.unshift(Math.pow(nums[left], 2));
      left++;
    }
  }
  return ans;
}
