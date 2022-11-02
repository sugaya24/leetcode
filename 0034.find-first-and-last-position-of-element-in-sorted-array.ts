function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  const res = [-1, -1];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      res[0] = mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      res[1] = mid;
    }
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
}

export default searchRange;
