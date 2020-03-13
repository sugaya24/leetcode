/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  res = '1';
  for (let i = 1; i < n; i++) {
    let nextResult = '';
    let count = 0;
    let currentNum = res[0];
    for (let j = 0; j <= res.length; j++) {
      if (currentNum === res[j]) {
        count++;
      } else {
        nextResult += count + currentNum;
        currentNum = res[j];
        count = 1;
      }
    }
    res = nextResult;
  }
  return res;
}
// @lc code=end

console.log(countAndSay(1));
console.log(countAndSay(4));
