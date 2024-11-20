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
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    let temp = this.head;
    let prev = this.head;
    if(!this.head){
      return undefined;
    }
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if(this.length===0){
      this.head=null;
      this.tail=null;
    }
  }
}
const newList = new LinkedList(1);
newList.push(10);
newList.push(4);
newList.push(9);
newList.pop();
newList.pop();
console.log(newList);
