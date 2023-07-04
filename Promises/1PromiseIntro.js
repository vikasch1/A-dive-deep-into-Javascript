function getRandomInt(Max){
    return Math.floor(Math.random()*Max);
}

console.log(getRandomInt(5));


function createPromiseinloop(){
   return new Promise(function executor(resolve,reject){
    for(let i=0;i<100000000000;i++){
        
    }
    let num=getRandomInt(10);
    if(num%2==0){
        resolve(num);
    }else{
        reject(num);
    }

   })
};


let x =createPromiseinloop();
console.log(x);



