class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Stack Constructor
class Stack {
  constructor(val) {
    let newNode = new Node(val);
    this.top = newNode;
    this.length = 1;
  }

  push(val) {
    let newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }
}

let stack = new Stack(10);
console.log(stack.push(20));
