function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.ceil((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

export default search;

search([-1, 0, 3, 5, 9, 12], 9);
