console.log("hello");
setTimeout(function exec()
 {
    console.log("timer done");
    
}, 0);
for(let i=0;i<10000000000;i++){
    //some task
}
console.log("end");

//timeout will stay in event queue
//wait till for loop gets over


//hello
//end
//timer end

