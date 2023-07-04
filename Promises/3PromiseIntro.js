function getRandomInt(Max){
    return Math.floor(Math.random()*Max);
}

console.log(getRandomInt(5));


function createPromisewithsettimeout(){
   return new Promise(function executor(resolve,reject){
    for(let i=0;i<1000000000;i++){
        
    }
    setTimeout(function(){
        let num=getRandomInt(10);
    if(num%2==0){
        console.log("fullfilling");
        resolve(num);
        console.log("completed resolving");
        resolve(10);
        console.log("resolving again");
        return num;
    }else{
        console.log("rejecting");
        reject(num);
        console.log("completed rejecting");
        reject(10);
        console.log("rejecting again");
        return num;
    }

    },5000 );
       
   })
};


let y =createPromisewithsettimeout();
console.log(y);










