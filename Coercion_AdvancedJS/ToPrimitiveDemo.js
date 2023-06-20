let obj ={};
console.log(10-obj); //obj.valueOf- object , obj.toString-[object,object]---> converts into number - invalid number --10-invalid = Nan
console.log(10-NaN); //10-invalid=invalid=nan
console.log(obj-obj); //nan-nan=nan


let obj1={
    x:9,
    y:8
};

console.log(100-obj1); //nan

let obj2={
    x:10,
    valueOf(){
        return 99;
    }
};

console.log(100-obj2); //1

let obj3={
    x:40,
    toString(){
        return "88";
    }
};

console.log(100-obj3);//12

let obj4={
    x:50,
    toString(){
        return {};
    }
};

console.log(100-obj4); //type error;






