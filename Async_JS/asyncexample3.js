console.log("hello world");
setTimeout(function exec(){
    console.log("timer done");
    setTimeout(function exec(){
        console.log("another timer done");

    },10);
},0);
for(let i=0;i<1000;i++){
    //do some work.
}
console.log("end");


// hello world
// end
// timer done
// another timer done


