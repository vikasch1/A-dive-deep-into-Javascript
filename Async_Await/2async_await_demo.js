function download(){
    return new Promise(function exec(resolve,reject){
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content= "ABCDEF"; // assume dummy download content
           resolve(content);
         }, 4000);

    })
}

function writeFile(data){
    return new Promise(function exec(resolve,reject){
        
    console.log( "Started writing a file with", data);
    setTimeout(function wrtie() {
        console.log( "Completed writing the data in a file");
        const filename = "file.txt";
        resolve(filename);
    },5000);
    


    })
}

function upload(file,url){
    return new Promise(function exec(resolve,reject){
        console.log( "Started uploading", file, "on", url);
        setTimeout(function up() {
            console.log( "upload completed");
             const response="SUCCESS";
            resolve(response);
        },2000);

    })
}





async function steps(){
    const downloadeddata=await download("www.xyz.com");
    console.log("downloaded data is ",downloadeddata);
    const filewritten =await writeFile(downloadeddata);
    console.loog("file written is ",filewritten);
    const uploadresponse =await upload(filewritten,"www.drive.google.com");
    console.log("upload response is ",uploadresponse);
    return uploadresponse;

}

steps().then((value)=> console.log("we have completed steps with ",value));
console.log("outside");
for(let i=0;i<10000000000;i++){

}
setTimeout(function f(){console.log("timer done")},2000);
console.log("for loop done");



