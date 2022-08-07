export function sortedSquares(nums: number[]): number[] {
  return nums.map((n) => Math.pow(n, 2)).sort((a, b) => a - b);
}
