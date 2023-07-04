console.log("hello");
for(let i=0;i<3;i++){
    setTimeout(function exec()
 {
    console.log("timer done",i);
    
}, 10)

}
for(let i=0;i<10000000000;i++){
    //some task
}

console.log("end");

//hello
// end
// timer done 0
// timer done 1
// timer done 2


