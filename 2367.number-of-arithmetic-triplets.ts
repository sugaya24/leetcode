function arithmeticTriplets(nums: number[], diff: number): number {
  let count = 0;
  const set = new Set(nums);
  for (const n of nums) {
    if (set.has(n + diff) && set.has(n + diff * 2)) {
      count++;
    }
  }
  return count;
}

export default arithmeticTriplets;
