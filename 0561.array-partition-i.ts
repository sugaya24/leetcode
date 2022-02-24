export function arrayPairSum(nums: number[]): number {
  return nums
    .sort((a, b) => a - b)
    .reduce((acc, cur, i) => {
      if (i % 2 === 0) {
        return acc + cur;
      }
      return acc;
    }, 0);
}
