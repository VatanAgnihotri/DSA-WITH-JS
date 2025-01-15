// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

let searchMatrix = function (matrix, target) {
  // Sloution 1

  // let top = 0;
  // let bottom = matrix.length - 1;
  // let cols = matrix[0].length - 1;
  // let row = 0;
  // while (top <= bottom) {
  //   let m = Math.floor((bottom + top) / 2);
  //   if (target < matrix[m][0]) {
  //     bottom = m - 1;
  //   } else if (target > matrix[m][cols]) {
  //     top = m + 1;
  //   } else {
  //     break;
  //   }
  // }
  // if (!(top <= bottom)) return false;
  // row = Math.floor((top + bottom) / 2);
  // let left = 0;
  // let right = cols;
  // while (left <= right) {
  //   let m = Math.floor((left + right) / 2);
  //   if (target < matrix[row][m]) {
  //     right = m - 1;
  //   } else if (target > matrix[row][m]) {
  //     left = m + 1;
  //   } else {
  //     return true;
  //   }
  // }
  // return false;

  // Sloution 2

  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    if (matrix[row][col] > target) {
      right = mid - 1;
    } else if (matrix[row][col] < target) {
      left = mid + 1;
    } else return true;
  }
  return false;
};
