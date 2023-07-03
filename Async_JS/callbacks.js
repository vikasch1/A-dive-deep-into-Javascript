/**
 * 

 */


function fun(x,fn){
    for(let i=0;i<x;i++){
        console.log(i);
    }
    fn();

}

fun(10,function exec(){
    console.log("i am executed also");
})
//exec is a callback fns 
//hof consumes some sort of fns 
//the fns consumed by hof are callbacks
