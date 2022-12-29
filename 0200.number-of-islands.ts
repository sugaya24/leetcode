function numIslands(grid: string[][]): number {
  const H = grid.length;
  const W = H && grid[0].length;
  let count = 0;

  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      if (grid[r][c] === '0') continue;
      count++;
      dfs(r, c);
    }
  }
  return count;

  function dfs(r: number, c: number) {
    if (r < 0 || c < 0 || r === H || c === W) return;
    if (grid[r][c] === '0') return;

    grid[r][c] = '0';
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }
}

export default numIslands;
