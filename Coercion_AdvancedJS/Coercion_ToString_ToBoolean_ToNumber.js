//ToBoolean Demo
let x =10;
console.log(!x); //false

let y=undefined;
console.log(!y); // true


if(10){
    console.log("hi");
}

//10 is passed to tobboolean abstract operation and it being a truthy values it returns true.


if(undefined){
    console.log("bye");
}

if(""){
    console.log("truthy");
}else{
    console.log("falsy");
}
//empty string is a falsy value, to boolean returns false

//----------------------Abstract equality demo --------------------------------------------------
console.log(null==undefined);//true
console.log(undefined==null);//true
console.log(12=="12");//true
console.log("12"==12);//true
console.log("a"==97);//false

console.log(false=="0");//true
//false converts into 0
//comapre 0 and "0"-"0"converts to 0
//0==0-true
console.log("0"==true);//false

console.log(null==false);// false
// false converts into 0
//compare null and 0
//returns false


console.log(NaN===NaN);// false
//tyoe of nan is number 
//typeof y is number
//whats there in y we dont care just return false.


console.log(0===-0);//true
console.log(-0===0);//true


let obj={
    x:10,
    valueOf(){
        return 100;
    }
}

console.log(99==obj);//false
//obj passed toprimitve , default hint is tonumber 
console.log(100==obj);//true

let obj2={
    x:20
}

console.log(99==obj2);//false


console.log("abc"==="abc");//true
console.log("ab"==="abc");//false





objj1={
    x:10
}
objj2={
    x:10
}
objj3={
    y:10
}

console.log(objj1===objj2);//false
console.log(objj1===objj3);//false
console.log(objj1===objj1);//true cz comparing same memory object
console.log({x:10}==={x:10});;//false- diff memory location of objects


//corner case coercion

console.log(""+0); //0
console.log(""+(-0)); //0
console.log(""+[]);//empty array-empty string
console.log(""+{});//[obj,obj]
console.log(""+[1,2,3]); //1,2,3
console.log(""+[null,undefined]);// ,
console.log(""+[1,2,null,3]); //1,2,,3


//tonumber


console.log(0-"010");//-10
console.log(0-"o10");//nan

console.log(0 - 0o10);//-8  
console.log(0-0xb);//-11
console.log(0-[]);//0
console.log(1-[]); //1
console.log([]-0);//0
console.log(["0"]-1); //-1
console.log([""]-1);//-1
console.log([6]-1);//5













