/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j] && prices[j] - prices[i] > profit) {
        profit = prices[j] - prices[i];
      }
    }
  }
  return profit;
};
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
