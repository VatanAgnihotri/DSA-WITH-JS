class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else {
      let current = this.root;
      let temp = null;
      while (current) {
        if (val === current.val) return undefined;
        temp = current;
        if (val > current.val) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
      if (val > temp.val) temp.right = newNode;
      else temp.left = newNode;
    }
    return this;
  }

  find(val) {
    
  }
}

let bst = new BST();
bst.insert(40);
bst.insert(30);
bst.insert(50);
bst.insert(20);
bst.insert(35);
bst.insert(45);
bst.insert(60);
console.log(bst);
