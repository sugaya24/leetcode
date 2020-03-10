/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  for (let i = 0; i < board.length; i++) {
    const row = new Set();
    for (let j = 0; j < board.length; j++) {
      const num = board[i][j];
      if (num === '.') continue;
      if (row.has(num)) {
        return false;
      } else {
        row.add(num);
      }
    }

    const col = new Set();
    for (let j = 0; j < board.length; j++) {
      const num = board[j][i];
      if (num === '.') continue;
      if (col.has(num)) {
        return false;
      } else {
        col.add(num);
      }
    }

    const box = new Set();
    for (let j = 0; j < board.length; j++) {
      const num =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          ((i * 3) % 9) + (j % 3)
        ];
      if (num === '.') continue;
      if (box.has(num)) {
        return false;
      } else {
        box.add(num);
      }
    }
  }
  return true;
}
// @lc code=end

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
);

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['1', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
);
