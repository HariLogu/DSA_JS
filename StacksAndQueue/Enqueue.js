class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Queue{
    constructor(value){
        this.first=new Node(value);
        this.last=this.first;
        this.length=1;
    }
    enqueue(value){
        let newNode=new Node(value);
        if(this.length===0){
            this.first=newNode;
            this.last=newNode;
        }
        else{
            this.last.next=newNode;
            this.last=newNode;
            this.length++;
            return this;
        }
    }
}
const myqueue=new Queue(0);
myqueue.enqueue(1);
myqueue.enqueue(2);
console.log(myqueue);
