function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let sum = 0;
  let ans = 0;
  while (right <= nums.length) {
    if (sum < target) {
      sum += nums[right];
      right++;
    } else {
      ans = ans === 0 ? right - left : Math.min(ans, right - left);
      sum -= nums[left];
      left++;
    }
  }
  return ans;
}

export default minSubArrayLen;
