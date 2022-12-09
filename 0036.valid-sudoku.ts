function isValidSudoku(board: string[][]): boolean {
  const N = 3;
  for (let i = 0; i < board.length; i++) {
    const rowSet = new Set();
    const colSet = new Set();
    const boxSet = new Set();
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== '.' && rowSet.has(board[i][j])) {
        return false;
      } else {
        rowSet.add(board[i][j]);
      }

      if (board[j][i] !== '.' && colSet.has(board[j][i])) {
        return false;
      } else {
        colSet.add(board[j][i]);
      }

      const boxNum =
        board[N * Math.floor(i / N) + Math.floor(j / N)][
          ((i * N) % 9) + (j % N)
        ];
      if (boxNum !== '.' && boxSet.has(boxNum)) {
        return false;
      } else {
        boxSet.add(boxNum);
      }
    }
  }

  return true;
}

export default isValidSudoku;
