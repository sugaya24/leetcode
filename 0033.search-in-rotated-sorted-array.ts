function search(nums: number[], target: number): number {
  if (nums.length === 1) return nums.indexOf(target);
  if (target < nums[0] && nums[nums.length - 1] < target) return -1;

  let left = 0;
  let right = nums.length - 1;
  let bottom = 0;
  if (nums[left] > nums[right]) {
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[right]) {
        left = mid + 1;
        bottom = mid + 1;
      } else {
        right = mid;
        bottom = mid;
      }
    }
  }

  if (nums[0] <= target && nums[nums.length - 1] < target) {
    left = 0;
    right = bottom - 1;
  } else {
    left = bottom;
    right = nums.length - 1;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export default search;
