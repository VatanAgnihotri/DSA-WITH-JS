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

  enqueue(val) {
    let newNode = new Node(val);
    if (this.length < 1) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    this.length++;
    return this;
  }

  deque() {
    if (this.length < 1) return undefined;
    let temp = this.first;
    this.first = temp.next;
    temp.next = null;
    if (this.length === 1) {
      this.last = null;
    }
    this.length--;
    return temp;
  }
}

let queue = new Queue(10);
console.log("ENQUEUE :: ", queue.enqueue(20));
queue.enqueue(30);
console.log("DEQUE :: ", queue.deque());
console.log("QUEUE :: ", queue);
