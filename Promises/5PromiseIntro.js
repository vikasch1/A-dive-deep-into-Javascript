function createpromise(){
    return new Promise(function exec(resolve,reject){
        let x =setTimeout(function givevalue(){
            return 2;
        },4000);
        if(x%2==0){
            resolve("succesfull");
        }else{
            resolve("rejected");
        }
    })


     
    
}

let y=createpromise();
console.log(y);


