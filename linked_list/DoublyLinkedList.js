class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (!this.head || index >= this.length || index < 0) return undefined;
    if (index === 0) return this.head;
    let i = this.length - 1;
    if (index === i) return this.tail;
    const mid = i / 2;
    let curr = this.tail;
    if (index >= mid) {
      while (i > index) {
        curr = curr.prev;
        i--;
      }
    } else {
      curr = this.head;
      let j = 0;
      while (j < index) {
        curr = curr.next;
        j++;
      }
    }
    return curr;
  }

  set(index, val) {
    let curr = this.get(index);
    if (!curr) return false;
    curr.val = val;
    return true;
  }

  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length - 1) {
      this.push(val);
      return true;
    }
    let next = this.get(index);
    if (!next) return false;
    const newNode = new Node(val);
    const prev = next.prev;
    newNode.next = next;
    newNode.prev = prev;
    prev.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let curr = this.get(index);
    if (!curr) return false;
    let next = curr.next;
    let prev = curr.prev;
    next.prev = prev;
    prev.next = next;
    curr.next = null;
    curr.prev = null;
    return curr;
  }
}

const list = new DoublyLinkedList(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
// console.log("POP::", list.pop());
// console.log(list.unshift(5));
// console.log("SHIFT ::", list.shift());
// console.log("GET :: ", list.get(1));
// console.log("SET :: ", list.set(0, 5));
// console.log("INSERT :: ", list.insert(2, 5));
console.log(list.remove(4));
console.log("list::", list);
