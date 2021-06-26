function maxIncreaseKeepingSkyline(grid: number[][]): number {
  // それぞれの行と列についての最大値を超えないようにgrid[i][j]の値を更新していく
  // rowについてはgrid[i]の配列の最大値を求めればよいので
  // rowの最大値を見ながらcolumnの更新をする方向で
  let maxHeightInRow: number[] = [],
    maxHeightInCol: number[] = [],
    sum = 0;
  for (let i = 0; i < grid.length; i++) {
    let maxRow = 0,
      maxCol = 0;
    for (let j = 0; j < grid.length; j++) {
      maxRow = Math.max(grid[i][j], maxRow);
      maxCol = Math.max(grid[j][i], maxCol);
    }
    maxHeightInRow.push(maxRow);
    maxHeightInCol.push(maxCol);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] < Math.min(maxHeightInRow[i], maxHeightInCol[j]))
        sum += Math.min(maxHeightInRow[i], maxHeightInCol[j]) - grid[i][j];
    }
  }
  return sum;
}

console.log(
  maxIncreaseKeepingSkyline([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0],
  ])
);
