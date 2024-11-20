// a function which calls itself automatically eg.factorial
const counter=(n)=>{
    if(n>0){
        console.log(n);
        counter(n-1);
        
    }
    else{
        console.log("finished");
    }
}
counter(5);