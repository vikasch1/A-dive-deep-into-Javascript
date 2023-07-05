function fetdata(url){
    return new Promise(function (resolve,reject){
        console.log("started downloading from url-",url);
        setTimeout(function processdownloading(){
            let data ="dummy data";
         
            resolve(data);
            console.log("downloading complete");

        },5000);
    })
}


console.log("started");
let promiseobj=fetdata("hfhfhryrh");
promiseobj.then(function A(value){
    console.log("VALUE IS",value);
})

console.log("ends");

