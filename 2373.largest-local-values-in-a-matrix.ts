function largestLocal(grid: number[][]): number[][] {
  const N = grid.length;
  const maxLocal: number[][] = [];
  for (let i = 0; i < N; i++) {
    const row = [];
    for (let j = 0; j < N; j++) {
      if (i === 0 || j === 0 || i === N - 1 || j === N - 1) {
        continue;
      } else {
        let max = 0;
        for (let n = 0; n < 3; n++) {
          for (let m = 0; m < 3; m++) {
            max = Math.max(max, grid[i + n - 1][j + m - 1]);
          }
        }
        row.push(max);
      }
    }
    if (row.length) {
      maxLocal.push(row);
    }
  }
  return maxLocal;
}

export default largestLocal;
