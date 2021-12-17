function maxSubsequence(nums: number[], k: number): number[] {
  const indexedNums = nums.map((num, index) => [num, index]);
  const desc = indexedNums.sort((a, b) => b[0] - a[0]);
  const asc = desc.splice(0, k).sort((a, b) => a[1] - b[1]);
  return asc.map((arr) => arr[0]);
}

console.log(maxSubsequence([2, 1, 3, 3], 2));
console.log(maxSubsequence([-1, -2, 3, 4], 3));
console.log(maxSubsequence([3, 4, 3, 3], 2));
