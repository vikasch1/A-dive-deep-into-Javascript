

setTimeout(function exec(){
    console.log("running after sometime");
},5000);
//exec is a callback function.
//settimeout is a hof which takes exec as callbacks.
