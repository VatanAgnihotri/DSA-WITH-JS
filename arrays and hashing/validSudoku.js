// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

Input: board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

const isValidSudoku = (board) => {
  //Solution 1
  // const rowsMap = new Map();
  // const colsMap = new Map();
  // const squareMap = new Map();

  // for (let i = 0; i < board.length; i++) {
  //   for (let j = 0; j < 9; j++) {
  //     if (board[i][j] === ".") continue;
  //     if (
  //       (rowsMap.has(i) && rowsMap.get(i).has(board[i][j])) ||
  //       (colsMap.has(j) && colsMap.get(j).has(board[i][j])) ||
  //       (squareMap.has(`(${Math.floor(i / 3)}, ${Math.floor(j / 3)})`) &&
  //         squareMap
  //           .get(`(${Math.floor(i / 3)}, ${Math.floor(j / 3)})`)
  //           .has(board[i][j]))
  //     )
  //       return false;
  //     rowsMap.has(i)
  //       ? rowsMap.get(i).add(board[i][j])
  //       : rowsMap.set(i, new Set([board[i][j]]));
  //     colsMap.has(j)
  //       ? colsMap.get(j).add(board[i][j])
  //       : colsMap.set(j, new Set([board[i][j]]));
  //     squareMap.has(`(${Math.floor(i / 3)}, ${Math.floor(j / 3)})`)
  //       ? squareMap
  //           .get(`(${Math.floor(i / 3)}, ${Math.floor(j / 3)})`)
  //           .add(board[i][j])
  //       : squareMap.set(
  //           `(${Math.floor(i / 3)}, ${Math.floor(j / 3)})`,
  //           new Set([board[i][j]])
  //         );
  //   }
  // }
  // return true;

  //Solution 2
  let hashSet = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cellVal = board[i][j];
      if (cellVal !== ".") {
        if (
          hashSet.has(`Row,${i},${cellVal}`) ||
          hashSet.has(`Col,${j},${cellVal}`) ||
          hashSet.has(
            `Box,${Math.floor(i / 3)},${Math.floor(j / 3)},${cellVal}`
          )
        )
          return false;
        hashSet.add(`Row,${i},${cellVal}`);
        hashSet.add(`Col,${j},${cellVal}`);
        hashSet.add(`Box,${Math.floor(i / 3)},${Math.floor(j / 3)},${cellVal}`);
      }
    }
  }
  return true;
};

console.log(isValidSudoku(board));
