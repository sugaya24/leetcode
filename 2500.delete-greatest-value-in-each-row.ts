function deleteGreatestValue(grid: number[][]): number {
  let sum = 0;
  for (const row of grid) {
    row.sort((a, b) => b - a);
  }
  let i = 0;
  while (i < grid[0].length) {
    let max = 0;
    for (const row of grid) {
      max = Math.max(max, row[i]);
    }
    sum += max;
    i++;
  }
  return sum;
}

export default deleteGreatestValue;
