function maximumCount(nums: number[]): number {
  console.log(upper_bound(nums), lower_bound(nums));
  return Math.max(upper_bound(nums), lower_bound(nums));
}

function upper_bound(nums: number[]) {
  if (nums[0] >= 0) return 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.ceil((left + right) / 2);
    if (nums[mid] < 0) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left + 1;
}

function lower_bound(nums: number[]) {
  if (nums[nums.length - 1] <= 0) return 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > 0) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums.length - left;
}

export default maximumCount;
