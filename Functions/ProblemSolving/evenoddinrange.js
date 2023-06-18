let lo=5;
let high=27;
function oddeven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

for(let num=lo;num<=high;num++){
    if(oddeven(num)){
        console.log(num,"is even")
    }else{
        console.log(num,"is odd");
    }

}