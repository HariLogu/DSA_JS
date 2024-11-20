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
    let Newnode = new Node(value);
    if (this.root === null) {
      this.root = Newnode;
      return this;
    } else {
      let temp = this.root;
      while(true){
      if (Newnode.value == temp.value) {
        return undefined;
      } else {
        if (Newnode.value < temp.value) {
          if (temp.left === null) {
            temp.left = Newnode;
            return this;
          } else {
            temp = temp.left;
          }
        }

        if (Newnode.value > temp.value) {
          if (temp.right === null) {
            temp.right = Newnode;
            return this;
          } else {
            temp = temp.right;
          }
        }
      }
      }
    }
  }
  includes(value) {
    if (!this.root) {
      return false;
    } 
      let temp1 = this.root;
      while (temp1) {
        if (value < temp1.value) {
          temp1 = temp1.left;
        } else if (value > temp1.value) {
          temp1 = temp1.right;
        } else if (value === temp1.value) {
          return true;
        }
      }
      return false;
  }
}
const mybst = new BST();
mybst.insert(5);
mybst.insert(8);
mybst.insert(3);
mybst.insert(1);
mybst.insert(7);
mybst.insert(9);
// mybst.insert(9);
console.log(mybst);
// console.log(mybst.includes(7));
console.log(mybst.includes(1));
