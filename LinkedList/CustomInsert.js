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
  getFirst() {
    let temp = this.head;
    return temp;
  }
  getLast() {
    return this.tail;
  }
  get(index) {
    let c = 0;
    let temp = this.head;
    for (let i = 0; i <= index; i++) {
      if (c === index) {
        return temp;
      }
      temp = temp.next;
      c++;
    }
    return null;
  }
  set(index, value) {
    let temp = this.get(index);
    temp.value = value;
    return temp;
  }
  insert(index,value){
    if(index===0){
      return this.unshift(value);
    }
    else if(index===this.length){
      return this.push(value);
    }
    let prev=this.get(index-1);
    let temp=this.get(index);
    let newNode=new Node(value);
    prev.next=newNode;
    newNode.next=temp;
    this.length++;
    return prev;
  }
}
const myLL = new LinkedList(0);
myLL.push(1);
myLL.push(2);
myLL.push(3);
// myLL.pop();
// myLL.shift();
//   myLL.unshift(99);
//   myLL.getFirst();
// console.log(myLL.getFirst());
// myLL.set(1, 10);
// myLL.insert(0, 7);
console.log(myLL.insert(1, 7));
console.log(myLL);
