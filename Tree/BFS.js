// breadth first tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newnode = new Node(value);
    if (!this.root) {
      this.root = newnode;
      return this;
    }
    let temp = this.root;
    while (temp) {
      if (newnode.value == temp.value) {
        return undefined;
      }
      if (newnode.value < temp.value) {
        if (temp.left == null) {
          temp.left = newnode;
        } else {
          temp = temp.left;
        }
      }
      if (newnode.value > temp.value) {
        if (temp.right == null) {
          temp.right = newnode;
        } else {
          temp = temp.right;
        }
      }
    }
  }
  bfs() {
    let temp = this.root;
    let queue = [];
    let data = [];
    queue.push(temp);
    while (queue.length) {
      if (!this.root) {
        return data;
      }
      temp = queue.shift();
      data.push(temp.value);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
    return data;
  }
}
const mybst = new BST();
mybst.insert(5);
mybst.insert(8);
mybst.insert(3);
mybst.insert(1);
mybst.insert(7);
mybst.insert(9);
console.log(mybst.bfs());
