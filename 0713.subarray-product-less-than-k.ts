function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;
  let ans = 0;
  let left = 0;
  let right = 0;
  let product = 1;
  while (right < nums.length) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    ans += right - left + 1;
    right++;
  }
  return ans;
}

export default numSubarrayProductLessThanK;
