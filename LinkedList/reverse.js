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
    }
    this.tail.next = newNode;
    this.tail = newNode;
    newNode.next = null;
    this.length++;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    let next = temp;
    for (let i = 0; i < this.length; i++) {
      // first we have to shift next to the next node
      next = temp.next;
      // then we have to move prev to the temp.next
      // automatically points the prev
      temp.next = prev;
      // then we replace null with temp in prev
      prev = temp;
      // then temp should shift to the next value and soon
      temp = next;
    }
    // this.tail.next = null;
    return this.tail;
  }
}
const mylist = new LinkedList(1);
mylist.push(2);
mylist.push(3);
mylist.push(4);
// mylist.reverse();
console.log(mylist.reverse());
console.log(mylist);
