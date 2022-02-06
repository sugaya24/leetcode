export function maxProduct(nums: number[]): number {
  const sorted = nums.sort((a, b) => a - b);
  return (sorted[sorted.length - 1] - 1) * (sorted[sorted.length - 2] - 1);
}
