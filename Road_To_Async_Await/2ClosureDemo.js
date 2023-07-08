function DO(task){  //local to DO is task
    setTimeout(function exec(){
        console.log(task);
    },2000);
};

DO("hi");
console.log("ends");


