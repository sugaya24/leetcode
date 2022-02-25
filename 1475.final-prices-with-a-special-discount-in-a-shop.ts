export function finalPrices(prices: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < prices.length; i++) {
    let flag = false;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        result.push(prices[i] - prices[j]);
        flag = true;
        break;
      }
    }
    if (!flag) {
      result.push(prices[i]);
    }
  }
  return result;
}
