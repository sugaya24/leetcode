export function twoSum(numbers: number[], target: number): number[] {
  // binary search
  let left = 0,
    right = numbers.length - 1;
  for (let i = 0; i < numbers.length; i++) {
    left = i + 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (numbers[i] + numbers[mid] === target) {
        return [i + 1, mid + 1];
      } else if (numbers[i] + numbers[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return [];
}
