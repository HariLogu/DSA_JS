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
    let Newnode = new Node(value);
    this.tail.next = Newnode;
    this.tail = Newnode;
    this.length++;
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
  shift() {
    this.head = this.head.next;
    this.length--;
  }
  unshift(value) {
    if (!this.head) {
      return undefined;
    } else {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }
  getFirst(){
    let temp=this.head;
    return temp;
  }
  getLast(){
    return this.tail;
  }
}
const myLL = new LinkedList(1);
myLL.push(2);
myLL.push(3);
myLL.push(4);
// myLL.pop();
// myLL.shift();
myLL.unshift(99);
myLL.getFirst();
// console.log(myLL.getFirst());
console.log(myLL.getLast());
