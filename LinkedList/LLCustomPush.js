// in push method we have to 1.add a node at the end with the value in the space of the null,2.then the new node will be the tail then we should 3.increase the length by one.
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(value){
        this.head=new Node(value);
        this.tail=this.head;
        this.length=1;
    }
    push(value){
        let newNode=new Node(value);
        // if ll is empty
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            // here we have to perform three steps
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        }
    }
}
const newLL=new LinkedList(1);
newLL.push(10);
console.log(newLL);