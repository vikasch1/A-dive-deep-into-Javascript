function getRandomInt(Max){
    return Math.floor(Math.random()*Max);
}

console.log(getRandomInt(5));


function createPromisewithsettimeout(){
   return new Promise(function executor(resolve,reject){
    for(let i=0;i<100000000000;i++){
        
    }
    setTimeout(function(){
        let num=getRandomInt(10);
    if(num%2==0){
        resolve(num);
    }else{
        reject(num);
    }

    },5000 );
       
   })
};


let y =createPromisewithsettimeout();
console.log(y);








