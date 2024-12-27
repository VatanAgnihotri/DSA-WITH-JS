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
    let temp = this.root;
    if (!temp) return undefined;
    while (temp) {
      if (temp.val === val) return temp;
      if (val > temp.val) temp = temp.right;
      else temp = temp.left;
    }
    return undefined;
  }

  //Breadth First Search (BFS)
  BFS() {
    let current = this.root;
    let queue = [];
    let results = [];
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      results.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return results;
  }

  //Depth First Search (DFS) --> Preorder
  preOrderDFS() {
    let results = [];
    const traversal = (node) => {
      results.push(node.val);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    };
    traversal(this.root);
    return results;
  }

  //Depth First Search (DFS) --> PostOrder
  postOrderDFS() {
    let results = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      results.push(node.val);
    };
    traversal(this.root);
    return results;
  }

  //Depth First Search (DFS) --> InOrder
  inOrderDFS() {
    let results = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      results.push(node.val);
      if (node.right) traversal(node.right);
    };
    traversal(this.root);
    return results;
  }
}

let bst = new BST();
bst.insert(40);
bst.insert(30);
bst.insert(50);
bst.insert(25);
bst.insert(35);
bst.insert(45);
bst.insert(55);
// let found = bst.find(50);
// console.log(found);

// console.log(bst.BFS());
console.log("PREORDER :: ", bst.preOrderDFS());
console.log("POSTORDER :: ", bst.postOrderDFS());
console.log("INORDER :: ", bst.inOrderDFS());
