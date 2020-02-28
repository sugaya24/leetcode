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
  let min = Number.MAX_SAFE_INTEGER;
  let benefit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      benefit = Math.max(benefit, prices[i] - min);
    }
  }
  return benefit;
};
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
