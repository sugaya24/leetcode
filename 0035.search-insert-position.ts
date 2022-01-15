export function searchInsert(nums: number[], target: number): number {
  if (nums.indexOf(target) >= 0) return nums.indexOf(target);
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target && target < nums[mid + 1]) {
      return mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
