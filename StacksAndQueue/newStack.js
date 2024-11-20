class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Stack{
    constructor(value){
        this.first=new Node(value);
        this.length=1;
    }
}
const mystack=new Stack(0);
console.log(mystack);