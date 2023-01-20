function arithmeticTriplets(nums: number[], diff: number): number {
  let count = 0;
  const map = new Map();
  for (const [i, n] of nums.entries()) {
    map.set(n, i);
  }
  for (let i = 0; i < nums.length - 2; i++) {
    if (map.has(nums[i] + diff) && map.has(nums[i] + diff * 2)) {
      count++;
    }
  }
  return count;
}

export default arithmeticTriplets;
