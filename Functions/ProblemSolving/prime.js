// let x =11;
// let isprime=true;
// for(let div=2;div*div<=x;div++){
//     if(x%div==0){
//         isprime=false;
//         break;
//     }
    

// }
// if(isprime){
//     console.log(x,"is prime")
// }else{
//     console.log(x,"is not prime");

// }


let lo=5;
let hi=17;

for(let num=lo;num<=hi;num++){
    for(let div=2;div*div<=num;div++){
        if(num%div==0){
            console.log(num,"is not prime");
        }
        else{
            console.log(num,"is prime");
        }
    }
}


function isprime(x){
    for(let i=2;i<=x-1;i++){
        if(x%i==0){
            return false;
        }
        
    }
    return true;
}

console.log(isprime(5));
console.log(isprime(14));

