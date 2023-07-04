function createpromise(){
    return new Promise(function execute(resolve,reject){
        console.log("resolving the promise");
        resolve("Done");
    })
}

setTimeout(function process(){
    console.log("timer completed")
},0);

let p =createpromise();
p.then(function fulfillmenthandler(value){
    console.log("we fulfilled with the value",value);
},function rejectionHandler1(){
   
})


console.log("ending...");

