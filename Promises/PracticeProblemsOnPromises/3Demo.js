console.log("start of the file");


setTimeout(function timer1(){
    console.log("timer 1 done");
},0);

for(let i=0;i<10000000000;i++){
    //do some work
}


let x =Promise.resolve("vikas's promise");
x.then(function processpromise(value){
    console.log("whose promise ?",value);

});

setTimeout(function timer2(){
    console.log("timer 2 done");
});

console.log("end of the file");

// start of the file
// end of the file
// whose promise ? vikas's promise
// timer 1 done
// timer 2 done
