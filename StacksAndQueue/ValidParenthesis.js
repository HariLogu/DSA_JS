const isValid=((str)=>{
    let stack=[];
    const brackets={
        "(":")",
        "[":"]",
        "{":"}",
    }
    for(let i of str){
        if(brackets[i]){
            stack.push(i);
        }
        else{
            let top=stack.pop();
            if(!top || brackets[top] !== i){
                return false;
            }
        }
    }
    return stack.length===0;
})
console.log(isValid("()[]"));
console.log(isValid("()]"));
console.log(isValid("()}"));