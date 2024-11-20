class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(value){
        let newnode=new Node(value);
        if(!this.root) this.root=newnode;
        let temp=this.root;
        while(true){
            if(temp.value==newnode.value){
                return undefined;
            }
            if(newnode.value<temp.value){
                if(temp.left==null){
                    temp.left=newnode;
                }
                else{
                    temp=temp.left;
                }
            }
            if(newnode.value>temp.value){
                if(temp.right==null){
                    temp.right=newnode;
                }
                else{
                    temp=temp.right;
                }
            }
        }
    }
    dfsPostOrder(temp=this.root,data=[]){
        if(temp===null) return undefined;
        if(temp.left) this.dfsPostOrder(temp.left,data)
        
        if(temp.right) this.dfsPostOrder(temp.right,data)
        data.push(temp.value);
        return data;
    }
    dfsInOrder(temp=this.root,data=[]){
        if(temp===null) return undefined;
        if(temp.left) this.dfsInOrder(temp.left,data)
        data.push(temp.value);
        if(temp.right) this.dfsInOrder(temp.right,data)
        
        return data;
    }
}
const mybst=new BST();
mybst.insert(5);
mybst.insert(8);
mybst.insert(3);
mybst.insert(1);
mybst.insert(7);
mybst.insert(9);
console.log(mybst.dfsPostOrder());
console.log(mybst.dfsInOrder());