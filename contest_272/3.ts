export function getDescentPeriods(prices: number[]): number {
  let range: number = 1,
    ans: number = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] === prices[i + 1] + 1) {
      range++;
    } else {
      // 数列の和の公式
      ans += (range * (range + 1)) / 2;
      range = 1;
    }
  }
  ans += (range * (range + 1)) / 2;
  return ans;
}
