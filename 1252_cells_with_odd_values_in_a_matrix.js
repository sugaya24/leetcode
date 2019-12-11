/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  let result = 0;
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < m; j++) {
      matrix[i].push(0);
    }
  }
  const rowsIndex = [];
  const colsIndex = [];
  for (let i = 0; i < indices.length; i++) {
    rowsIndex.push(indices[i][0]);
    colsIndex.push(indices[i][1]);
  }

  rowsIndex.forEach(rowIndex => {
    incrementRow(matrix, m, rowIndex);
  });
  colsIndex.forEach(colIndex => {
    incrementCol(matrix, n, colIndex);
  });
  matrix.forEach(element => {
    element.forEach(cell => {
      if (cell % 2 === 1) result++;
    });
  });
  return result;
};
const incrementRow = (matrix, m, index) => {
  for (let i = 0; i < m; i++) {
    matrix[index][i]++;
  }
};
const incrementCol = (matrix, n, index) => {
  for (let i = 0; i < n; i++) {
    matrix[i][index]++;
  }
};

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1]
  ])
); // 6
console.log(
  oddCells(2, 2, [
    [1, 1],
    [0, 0]
  ])
); // 0
console.log(oddCells(48, 37, [[40, 5]]));
