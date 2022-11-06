function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product *= nums[j];
      if (product < k) {
        ans++;
      } else {
        break;
      }
    }
  }
  return ans;
}

export default numSubarrayProductLessThanK;
