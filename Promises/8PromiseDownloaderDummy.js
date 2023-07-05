
function download(url){
    console.log("started downloading from utl",url);
    return new Promise(function exec(resolve,reject){
        setTimeout(function p(){
            console.log("completed downloading data in 5 sec ");
            const content="abcdef";
            resolve(content);

        },5000);
    })
}


// download("www.xyz.com").then(function fulfillmenthandler(value){
//     console.log("content downloaded is ",value);
// })

x=download("www.xyz.com");
x.then(function fulfillmenthandler1(value){
    console.log("content downloaded  is 1",value);
    return "new promise string";

},
function rejectionHandler1(value){
    console.log("rejected with ",value);

}
)
.then(function newfulfillmenthandler(value){
    console.log("value from chained then promise",value); 
})

