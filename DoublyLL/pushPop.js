class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}
class DLL{
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
        this.tail=newNode;
        newNode.prev=this.tail;
        this.length++;
        return this;
    }
    pop(){
        if(this.length===0){
            return undefined;
        }
        let temp=this.tail;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        this.tail=this.tail.prev;
        this.tail.next=null;
        this.tail.prev=null;
        this.length--;
        return temp;
        
    }
}
const myll=new DLL(0);
myll.push(1);
myll.push(2);
myll.push(3);
// myll.pop();
console.log(myll.pop());
console.log(myll);