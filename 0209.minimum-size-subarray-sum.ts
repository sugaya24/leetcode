function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let sum = 0;
  let ans = 0;
  while (right <= nums.length) {
    sum += nums[right];
    while (sum >= target) {
      ans = ans === 0 ? right - left + 1 : Math.min(ans, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return ans;
}

export default minSubArrayLen;
