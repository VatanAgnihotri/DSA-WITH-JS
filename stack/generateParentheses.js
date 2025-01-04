// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

var generateParenthesis = function (n) {
  const results = [];
  const backtracking = (open, close, str) => {
    if (str.length === n * 2) {
      results.push(str);
      return;
    }
    if (open < n) backtracking(open + 1, close, `${str}(`);
    if (open > close) backtracking(open, close + 1, `${str})`);
  };
  backtracking(0, 0, "");
  return results;
};
