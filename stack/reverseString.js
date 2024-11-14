//Question: Implement a function called reverseString() that takes a string as input are return a new string with its character reversed.

const Stack = require("./Stack");

const reverseString = (str) => {
  const stack = new Stack(str[0]);
  let reversed = "";
  while (stack.length !== str.length) {
    stack.push(str[stack.length]);
  }
  while (stack.length !== 0) {
    reversed += stack.pop().val;
  }
  return reversed;
};

console.log("Reversed :: ", reverseString("hello"));
