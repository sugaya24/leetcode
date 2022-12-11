function spiralOrder(matrix: number[][]): number[] {
  const output: number[] = [];
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = matrix.length - 1;
  let colEnd = matrix[0].length - 1;
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      output.push(matrix[rowStart][i]);
    }
    for (let i = colStart + 1; i <= rowEnd; i++) {
      output.push(matrix[i][colEnd]);
    }
    if (rowStart < rowEnd && colStart < colEnd) {
      for (let i = colEnd - 1; i >= colStart; i--) {
        output.push(matrix[rowEnd][i]);
      }
      for (let i = rowEnd - 1; i > rowStart; i--) {
        output.push(matrix[i][colStart]);
      }
    }
    rowStart++;
    colStart++;
    rowEnd--;
    colEnd--;
  }
  return output;
}

export default spiralOrder;
