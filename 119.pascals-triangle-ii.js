/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  const row = [1];
  if (rowIndex === 0) return row;
  for (let i = 0; i < rowIndex + 1; i++) {
    const a = [...row, 0];
    const b = [0, ...row];
    for (let j = 0; j < i + 1; j++) {
      row[j] = a[j] + b[j];
    }
  }
  return row;
}
// @lc code=end

console.log(getRow(5));

// i = 0 | 1
// i = 1 | 1, 1
// i = 2 | 1, i, 1
// i = 3 | 1, i, i, 1
// i = 4 | 1, i, 2i, i, 1
// i = 5 | 1, i, 3i, 3i, i, 1
// i = 6 | 1, i, 4i, 6i, 4i, i, 1
// i = 7 | 1, i, 5i, 10i, 10i, 5i, i, 1
