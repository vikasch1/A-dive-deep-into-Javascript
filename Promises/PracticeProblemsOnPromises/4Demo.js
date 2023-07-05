function blocking_for_loop(){
    for(let i=0;i<10000000000;i++){
        //do some work
    }

}

console.log("start of the file");


setTimeout(function timer1(){
    console.log("timer 1 done");
},0);
blocking_for_loop();




let x =Promise.resolve("vikas's promise 1");
x.then(function processpromise(value){
    console.log("whose promise ?",value);
    blocking_for_loop();

});

let y =Promise.resolve("vikas's promise 2");
y.then(function processpromise(value){
    console.log("whose promise ?",value);
    setTimeout(function (){
        console.log("ok done");

    },0);

});
let z =Promise.resolve("vikas's promise 3");
z.then(function processpromise(value){
    console.log("whose promise ?",value);
    blocking_for_loop();

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
