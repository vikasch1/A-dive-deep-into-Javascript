// if(false){
//     var x =25;

// }
// console.log(x);//undefined

// function fun(){
//     var y=45; //not accessible outside

// }
// console.log(y);//error


function gun(){
    console.log(y);
    var y=60;
}
gun(); //undefined - no error

function gun2(){
    console.log(y);
    let y=60;
}
console.log(y);//error
gun2();//error












