// Question :: Implement a function called isBalancedParentheses() that checks if a given string containing parentheses is balanced or not.

const Stack = require("./Stack");

const isBalancedParentheses = (str) => {
  const pairs = { ")": "(", "}": "{", "]": "[" };
  const stack = new Stack(str[0]);
  let i = 1;
  while (i !== str.length) {
    if (stack.top !== null && stack.top.val === pairs[str[i]]) {
      stack.pop();
    } else stack.push(str[i]);
    i++;
  }
  if (stack.length === 0) return true;
  return false;
};

console.log(isBalancedParentheses("(){}"));
