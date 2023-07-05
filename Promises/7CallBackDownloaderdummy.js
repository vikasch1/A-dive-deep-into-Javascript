function download(url,cb){
    console.log("started downloading from url -",url);
    setTimeout(function exec(){
        console.log("completed downloading after 5 sec");
        const content="abcdef";
        cb(content);
        cb(content); //inversion of control
    },5000)
}

download("www.xyx.com",function processdownload(data){
    console.log("downloaded data is",data);

})

