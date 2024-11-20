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
    let temp = this.head;
    let prev = this.head;
    if (!this.head) {
      return undefined;
    } else {
      while (temp.next) {
        prev = temp;
        temp = prev.next;
      }
      this.tail = prev;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
  }
  unShift(value) {
    let newNode1 = new Node(value);
    // let temp=this.tail;
    // let next=this.tail;

    if (!this.head) {
      this.head = newNode1;
      this.tail = newNode1;
    } else {
      newNode1.next = this.head;
      this.head = newNode1;
      this.length++;
    }
  }
}
const newLL = new LinkedList(1);
newLL.push(2);
// newLL.pop();
newLL.unShift(9);
console.log(newLL);
