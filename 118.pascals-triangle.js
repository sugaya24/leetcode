/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const outer = [];
  for (let i = 0; i < numRows; i++) {
    outer.push([]);
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        outer[i][j] = 1;
      } else {
        outer[i][j] = outer[i - 1][j - 1] + outer[i - 1][j];
      }
    }
  }
  return outer;
}
// @lc code=end

console.log(generate(5));
