class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}
class DoublyLinkedList{
    constructor(value){
        this.head=new Node(value);
        this.tail=this.head;
        this.length=1;
    }
    push(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
        this.length++;
        return this;
    }
    unshift(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        this.head.prev=newNode;
        newNode.next=this.head;
        this.head=newNode;
        this.length++;
        
    }
    shift(){
        if(this.length===0){
            return undefined;
        }
        let temp=this.head;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        
        this.head=this.head.next;
        this.head.prev=null;
        temp.next=null;
        this.length--;
        return temp;
    }
}
const myll=new DoublyLinkedList(1);
myll.push(2);
myll.push(3);
myll.push(4);
// myll.unshift(9);
// myll.shift();
// console.log(myll.shift());
console.log(myll);