function process(){
    let i=0;
    function innerprocess(){
        i+=1;
        return i;

    }
    return innerprocess;
}


let res=process();  //output-[Function: innerprocess]
console.log(res);

console.log("first time calling res ",res());
console.log("second time calling res ",res());
console.log("third time calling res ",res());


let obj={func:res};
console.log(obj.func());
console.log(obj);
console.log(obj.obj);




