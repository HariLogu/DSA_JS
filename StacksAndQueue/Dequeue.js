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
        this.last.next=newNode;
        this.last=newNode;
        this.length++;
        return this;
    }
    dequeue(){
        if(this.length===0){
            return undefined;
        }
        if(this.length===0){
            this.first=null;
            this.last=null;
        }
        let temp=this.first;
        let prev=this.first;
        while(temp.next){
            prev=temp;
            temp=prev.next;
        }
        this.last=prev;
        prev.next=null;
        this.length--;
        return this;
    }
}
const myqueue=new Queue(0);
myqueue.enqueue(1);
myqueue.enqueue(2);
myqueue.enqueue(3);
myqueue.dequeue();
console.log(myqueue);