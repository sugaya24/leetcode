function topKFrequent(nums: number[], k: number): number[] {
  const freq: Map<number, number> = new Map();
  nums.forEach((num) => {
    return freq.get(num) ? freq.set(num, freq.get(num)! + 1) : freq.set(num, 1);
  });
  const buckets: Array<Array<number>> = new Array(nums.length);
  freq.forEach((value, key) => {
    buckets[value] ? buckets[value].push(key) : (buckets[value] = [key]);
  });
  return buckets.flat().slice(-k);
}

export default topKFrequent;
