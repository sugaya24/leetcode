/*
 * @lc app=leetcode id=1252 lang=javascript
 *
 * [1252] Cells with Odd Values in a Matrix
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
function oddCells(n, m, indices) {
  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(m).fill(0);
  }

  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < m; j++) {
      matrix[indices[i][0]][j]++;
    }
    for (let k = 0; k < n; k++) {
      matrix[k][indices[i][1]]++;
    }
  }

  let oddCount = 0;
  for (const arr of matrix) {
    for (const num of arr) {
      if (num % 2 !== 0) oddCount++;
    }
  }
  return oddCount;
}
// @lc code=end

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1]
  ])
);
