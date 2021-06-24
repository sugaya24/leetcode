function countPairs(deliciousness: number[]): number {
  let m = new Map(),
    ans = 0;
  // Push D into a standard frequency map
  for (const n of deliciousness) m.set(n, (m.get(n) || 0) + 1);
  // For each [key, value] pair
  for (const [k, v] of m) {
    // Iterate through power sums using bitwise shifts
    for (let i = 1 << 21; i >= 2 * k && i; i >>= 1) {
      if (i === 2 * k) ans += (v * (v - 1)) / 2;
      // If k is its own matching number, add pairs to ans
      else if (m.has(i - k)) ans += m.get(i - k) * v; // Otherwise, add product with matching number freq.
    }
  }
  return ans % 1000000007;
}

console.log(countPairs([1, 3, 5, 7, 9])); // 4
console.log(countPairs([1, 1, 1, 3, 3, 3, 7])); // 15
