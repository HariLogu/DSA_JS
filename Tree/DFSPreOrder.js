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
    if (this.root == null) {
      this.root = newnode;
      return this;
    }
    let temp = this.root;
    while (true) {
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

  dfsPreOrder(temp = this.root, data = []) {
    if (temp === null) return data;
    console.log(data);

    data.push(temp.value);
    if (temp.left) {
      // here we used recursion
      this.dfsPreOrder(temp.left, data);
    }
    if (temp.right) {
      this.dfsPreOrder(temp.right, data);
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
console.log(mybst.dfsPreOrder());
