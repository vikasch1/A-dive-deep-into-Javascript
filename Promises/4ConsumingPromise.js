function getRandomInt(Max){
    return Math.floor(Math.random()*Max);
}

console.log(getRandomInt(5));


function createPromisewithsettimeout(){
   return new Promise(function executor(resolve,reject){
    console.log("Entering the executor call back in the promise constructor ")
    setTimeout(function(){
        let num=getRandomInt(10);
    if(num%2==0){
        resolve(num);
    }else{
        reject(num);
    }

    },1000 );
    console.log("Exiting from the executor callback in the promise constructor");
       
   })

};



console.log("starting.....");
const p=createPromisewithsettimeout();
console.log("we are now waiting for the promise to complete");
console.log("currently my promise object is like ...",p);
console.log("going to register 1st set of handlers");
p
.then(function fulfillmentHnadler1(value){
    console.log("inside fulfillmenthandler1 with the value  -",value);
    console.log("promise after fulfillment 1 is ",p);
},
function rejectionHandler1(value){
    console.log("inside the rejectionhandler1 with the value -",value);
    console.log("promise after rejection 1 is ",p);
}
)

console.log("going to register 2nd set of handlers ");
p
.then(function fulfillmentHnadler2(value){
    console.log("inside fulfillmenthandler2 with the value  -",value);
    console.log("promise after fulfillment 2 is ",p);
},
function rejectionHandler2(value){
    console.log("inside the rejectionhandler2 with the value -",value);
    console.log("promise after rejection 2  is ",p);
}
)



console.log("ending.......");
for(let i=0;i<10000000000;i++){}
console.log("ending loop also done..");














