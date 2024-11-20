//Question :: Implement a function called sortStack() that takes a stack of integers as input and sorts the stack in ascending order(with the smallest element on the top) using an additional temporary stack.

const Stack = require("./Stack");
const stack = new Stack(1).push(2).push(-5).push(7);
const sortStack = () => {
  const temp = new Stack();
  let i = 0;
  let curr;
  while (stack.length > 0) {
    curr = !curr ? stack.pop() : curr;
    if (temp.length === 0 || temp.top.val < curr.val) {
      temp.push(curr.val);
      curr = undefined;
    } else {
      stack.push(temp.pop()?.val);
    }
  }
  while (temp.length > 0) {
    stack.push(temp.pop().val);
  }
  console.log(stack);
};

sortStack();
