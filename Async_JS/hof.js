function f(x,fn){
    /***
     x-number
     fn-function
     */
    console.log(x);
    console.log(fn);
    fn();
}

f(10,function exec(){
    console.log("I am na expression passed to HOF");
})

