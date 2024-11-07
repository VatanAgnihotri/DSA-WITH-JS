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
    this.topNode = newNode;
    this.length = 1;
  }
}

let stack = new Stack(10);
console.log(stack);
