class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(val) {
    let newNode = new Node(val);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
}

let queue = new Queue(10);
