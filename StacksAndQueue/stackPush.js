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
    push(value){
        let newNode=new Node(value);
        if(this.length===0){
            this.first=newNode;
        }
        else{
            
            newNode.next=this.first;
            this.first=newNode;
            this.length++;
        }
    }
}
const mystack=new Stack(0);
mystack.push(1);
mystack.push(2);
console.log(mystack);