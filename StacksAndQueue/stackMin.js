class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(value) {
    this.first = new Node(value);
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
      this.length++;
    }
  }
  min() {
    let temp = this.first;
    let minValue = temp.value;
    while (temp.next) {
      temp = temp.next;
      minValue = Math.min(temp.value, minValue);
    }
    return minValue;
  }
}
const mystack = new Stack(5);
mystack.push(1111);
mystack.push(2);
mystack.push(3);
// mystack.min();
console.log(mystack.min());