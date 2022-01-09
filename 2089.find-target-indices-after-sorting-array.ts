export function targetIndices(nums: number[], target: number): number[] {
  const sorted = nums.sort((a, b) => a - b);
  const ans = [];
  sorted.forEach((num, i) => {
    if (num === target) {
      ans.push(i);
    }
  });
  return ans;
}
