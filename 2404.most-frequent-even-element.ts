function mostFrequentEven(nums: number[]): number {
  let maxNum = Infinity;
  let maxCount = -1;
  const map = new Map();
  for (const num of nums) {
    if (num % 2 !== 0) continue;
    map.set(num, map.get(num) + 1 || 1);
  }
  for (const [num, count] of map) {
    if (maxCount === count) {
      maxNum = Math.min(num, maxNum);
    } else if (maxCount < count) {
      maxNum = num;
    }
    maxCount = Math.max(count, maxCount);
  }
  return maxNum === Infinity ? -1 : maxNum;
}

export default mostFrequentEven;
