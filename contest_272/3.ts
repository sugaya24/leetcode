export function getDescentPeriods(prices: number[]): number {
  // rangeが3の場合3 + 2 + 1
  // 1づつ下降を続ける限りrange++
  // 上昇次第、計算していく
  // 最後が下降で終わる時にどうするか
  let range = 1,
    ans = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] === prices[i + 1] + 1) {
      range++;
    } else {
      for (let i = 1; i <= range; i++) {
        ans += i;
      }
      range = 1;
    }
  }
  // 上昇で終わった時の処理
  for (let i = 1; i <= range; i++) {
    ans += i;
  }
  return ans;
}
