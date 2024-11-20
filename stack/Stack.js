class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Stack Constructor
class Stack {
  constructor(val) {
    if (val) {
      let newNode = new Node(val);
      this.top = newNode;
      this.length = 1;
    } else {
      this.top = null;
      this.length = 0;
    }
  }

  push(val) {
    let newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length < 1) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

// let stack = new Stack(10);
// stack.push(20);
// stack.push(30);
// console.log("POP :: ", stack.pop());
// console.log("STACK :: ", stack);

module.exports = Stack;
