function numberOfPairs(nums: number[]): number[] {
  const map = new Map();
  let pairs = 0;
  let leftover = 0;
  for (const n of nums) {
    if (!map.get(n) || map.get(n) === 0) {
      map.set(n, 1);
    } else {
      map.set(n, 0);
      pairs++;
    }
  }
  for (const value of map.values()) {
    leftover += value;
  }
  return [pairs, leftover];
}

export default numberOfPairs;
