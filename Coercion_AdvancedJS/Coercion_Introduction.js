let obj={};
console.log(obj.toString()); //[object object]
let obj1={
    toString(){
        return "lets learn js"  //overwrite default value i.e [object onject]
    }
};
console.log(obj1.toString());
console.log(typeof obj1.toString());

let obj2={
    toString(){
        return 10;
    }
};
console.log(obj2.toString());
console.log(typeof obj2.toString()); //number

let obj3={

};
console.log(obj3.valueOf()); //{}-by default
console.log(typeof obj3.valueOf()); //object

let obj4={
    x:10

}
console.log(obj4.valueOf()); //overwrite x=10 i.e { x: 10 }
console.log(typeof obj4.valueOf()); //object

let obj5={
    x:15,
    valueOf(){
        return 20;
    }
};

console.log(obj5.valueOf()); //overwrite - returns 20.
console.log(typeof obj5.valueOf());  //number - toprimitve abstract ops



let obj6={};
console.log("18"+obj6);//"18",[object,object]-"18[object,object]"
console.log(18+obj6); //18[obj,obj]

console.log("18"-obj6);//nan
console.log(18-obj6); //nan















