/***
 1-inversion of control-(promises can help)
 2-callback hell-readability problem
 */

 function dotask(fn,x){

    //whole implementation is done by team 1.

    fn(x*x); //calling callback with sqr of x
 }


 //here team 2 tries to use it.

 dotask(function exec(num){ //due to callbacks,i am passing control of how exec should be called
    //inversion of control
    console.log("number is ",num);

 },9);

