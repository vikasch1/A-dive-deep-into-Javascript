// Tasks: (Don't use promises only use callbacks)
// 1. Write a function to download data from a url
 // 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl.


function download(url, cb) {
    /**
     * Downloads content from the given url and passed the
      downloaded content to the given callback cb */
   console.log("Starting to download data from", url);
   setTimeout(function down() {
       console.log("Downloading completed");
       const content= "ABCDEF"; // assume dummy download content
       cb(content);
    }, 4000);
}



function writeFile(data, cb) {
    
    console.log( "Started writing a file with", data);
    setTimeout(function wrtie() {
        console.log( "Completed writing the data in a file");
        const filename = "file.txt";
        cb(filename);
    },5000);
    }

    writeFile("abcdef", function process(name) {
        console.log("file wrtten with name", name);
    })



    function upload(url, file, cb){
        console.log( "Started uploading", file, "on", url);
        setTimeout(function up() {
            console. log( "upload completed");
             const response="SUCCESS";
            cb(response);
        },2000);

    }
   
   
 
    download("www. xyz.com", function processdownload(content) {
        console.log("Downloaded data is", content);
     });




     download("www. xyz.com", function process(content) {
       console.log("we are going to process the downloaded data ");
       writeFile(content,function processwrite(filename){
        console.log("we hace written and downloaded the data , now we will upload this");
        upload("www.upload.com",filename,function processupload(response){
            console.log("we have uploaded with ",response);

        });
       });
     });
     
   
        

