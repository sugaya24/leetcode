export function sumOfUnique(nums: number[]): number {
  const map = new Map<number, number>();
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  nums.forEach((num) => {
    if (map.get(num) === 1) {
      sum += num;
    }
  });
  return sum;
}
