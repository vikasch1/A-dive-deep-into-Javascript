const http =require('http'); 
 //require the http module

 const PORT=3000;
//using the createserver func we can actually create a server using http module of nodejs
//this function return a server object , and takes a callback as an argument.

const server =http.createServer(function listener(request,response){
//this callback is a kind of listener function that is going to collect every http request that we will make to our server
//request-we will be able to details of incoming http requests
//response-we will be able to configure what response we need to send for an incoming http request.

//TODO...


if(request.url=='\home'){
    console.log(request.method);
    response.end("welcome to home ");
}
// console.log("incoming requests ",request);
// console.log("response object details ",response);
console.log("REQUEST RECIEVED");
});


server.listen(PORT,function exec(){
    //once we succesfully boot up the server on the given port ,THE CALLBACK WILL BE EXECUTED.
    console.log("server is up and running on port ",PORT);
});





