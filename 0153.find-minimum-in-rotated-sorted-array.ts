function findMin(nums: number[]): number {
  if (nums[0] < nums[nums.length - 1]) return nums[0];
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[l] < nums[mid]) {
      if (nums[mid] < nums[r]) {
        r = mid;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] > nums[r]) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
  }
  return nums[l];
}

export default findMin;
