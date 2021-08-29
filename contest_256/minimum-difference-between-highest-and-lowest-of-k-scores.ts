function minimumDifference(nums: number[], k: number): number {
  const asc = nums.sort((a, b) => a - b);
  let min = asc[asc.length - 1];
  for (let i = 0; i <= asc.length - k; i++) {
    min = Math.min(min, asc[i + k - 1] - asc[i]);
  }
  return min;
}

console.log(minimumDifference([90], 1));
console.log(minimumDifference([9, 4, 1, 7], 2));
