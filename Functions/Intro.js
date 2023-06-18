let x =10;
function iseven(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}

let result=iseven(x);
if(result){
    console.log(x, "is even");
}else{
    console.log(x,"is odd");

}

for(let i=1;i<=20;i++){
    let result=iseven(i);
    if(result==true){
        console.log(i,"is even");
    }else{
        console.log(i,"is odd");
    }
}