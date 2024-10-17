class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    temp.next = null;
    return temp;
  }

  get(index) {
    if (index >= this.length || index < 0 || this.length < 1) return undefined;
    let i = 0;
    let temp = this.head;
    while (i < index) {
      temp = temp.next;
      i++;
    }
    return temp;
  }

  set(index, val) {
    let temp = this.get(index);
    if (temp) {
      temp.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length || this.length < 1) return false;
    if (index === 0) return this.unshift(val);
    else if (index === this.length) return this.push(val);
    const newNode = new Node(val);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return newNode;
  }

  remove(index) {
    if (index < 0 || index >= this.length || this.length < 1) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let pre = this.get(index - 1);
    let temp = pre.next;
    pre.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prv = null;
    let next;
    let i = 0;
    while (i < this.length) {
      next = temp.next;
      temp.next = prv;
      prv = temp;
      temp = next;
      i++;
    }
    return this;
  }
}

const list = new SinglyLinkedList(10);
list.push(20);
list.push(22);
console.log(`LIST :: ${JSON.stringify(list)}`);

// console.log(JSON.stringify(list.push(25)));
// console.log(`POP:: ${JSON.stringify(list.pop())}`);
// console.log(list.unshift(5));
// console.log(list.shift());
// console.log(list.get(3));
// console.log(list.set(1, 12));
// console.log(JSON.stringify(list.insert(3, 123)));
// console.log(list.remove(1));
console.log(`Reversed LIST :: ${JSON.stringify(list.reverse())}`);
