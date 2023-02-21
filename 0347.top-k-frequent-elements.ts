function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  for (const num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  const ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(sorted[i][0]);
  }
  return ans;
}

export default topKFrequent;
