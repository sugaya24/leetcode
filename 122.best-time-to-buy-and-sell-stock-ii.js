/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let benefit = 0;
  let prev = Infinity;
  for (const price of prices) {
    if (prev < price) {
      benefit += price - prev;
    }
    prev = price;
  }
  return benefit;
}
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
