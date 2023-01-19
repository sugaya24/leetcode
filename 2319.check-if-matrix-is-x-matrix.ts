function checkXMatrix(grid: number[][]): boolean {
  const N = grid.length;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j || j === N - i - 1) {
        if (grid[i][j] === 0) {
          return false;
        }
      } else {
        if (grid[i][j] !== 0) {
          return false;
        }
      }
    }
  }
  return true;
}

export default checkXMatrix;
