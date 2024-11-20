class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  pop() {
    if (!this.head) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      let prev = this.head;
      while (temp.next) {
        prev = temp;
        temp = prev.next;
      }
      this.tail = prev;
      this.tail.next = null;
      this.length--;
    }
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    //   assign to the temp var
    let temp = this.head;
    // assign the next value as head or we can use this line only
    this.head = this.head.next;
    // remove temp
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
}
const myLL = new LinkedList(1);
myLL.push(3);
myLL.push(5);
myLL.pop();
myLL.unshift(99);
myLL.shift();
console.log(myLL);
