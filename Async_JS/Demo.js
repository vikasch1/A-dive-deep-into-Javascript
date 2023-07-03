function timeconsumingbyloop(){


console.log("loop starts");
for(let i=0;i<10000000000;i++){
    //some task
}
console.log("loop ends");
}


function timeconsumingByRunTimeFeature0(){
    console.log("timer starts 0");
    setTimeout(function exec0(){
        console.log("timer ends 0")
        for(let i=0;i<10000000000;i++){
            //some task
        }
    },5000);
}
function timeconsumingByRunTimeFeature1(){
    console.log("timer starts 1");
    setTimeout(function exec1(){
        console.log("timer ends 1")
        for(let i=0;i<10000000000;i++){
            //some task
        }
    },0);
}

function timeconsumingByRunTimeFeature2(){
    console.log("timer starts 2");
    setTimeout(function exec2(){
        console.log("timer ends 2")
        for(let i=0;i<10000000000;i++){
            //some task
        }
    },200);
}


console.log("hi");
timeconsumingbyloop();
timeconsumingByRunTimeFeature0();
timeconsumingByRunTimeFeature1();
timeconsumingByRunTimeFeature2();
timeconsumingbyloop();
console.log("bye");


