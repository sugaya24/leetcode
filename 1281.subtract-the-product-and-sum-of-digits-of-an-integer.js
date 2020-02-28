/*
 * @lc app=leetcode id=1281 lang=javascript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function subtractProductAndSum(n) {
  n = n.toString().split('');
  let product = 1;
  let sum = 0;
  for (const num of n) {
    product *= parseInt(num);
    sum += parseInt(num);
  }
  return product - sum;
}
// @lc code=end
console.log(subtractProductAndSum(234));
