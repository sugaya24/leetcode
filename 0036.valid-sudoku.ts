function isValidSudoku(board: string[][]): boolean {
  const rows: Map<number, Set<string>> = new Map();
  const cols: Map<number, Set<string>> = new Map();
  const squares: Map<string, Set<string>> = new Map();
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = board[r][c];
      if (num === '.') {
        continue;
      }
      const grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}}`;
      if (!cols.has(c)) {
        cols.set(c, new Set());
      }
      if (!rows.has(r)) {
        rows.set(r, new Set());
      }
      if (!squares.has(grid)) {
        squares.set(grid, new Set());
      }

      if (
        rows.get(r)?.has(num) ||
        cols.get(c)?.has(num) ||
        squares.get(grid)?.has(num)
      ) {
        return false;
      }

      console.log('cols', cols);
      cols.get(c)?.add(num);
      rows.get(r)?.add(num);
      squares.get(grid)?.add(num);
    }
  }
  return true;
}

export default isValidSudoku;
