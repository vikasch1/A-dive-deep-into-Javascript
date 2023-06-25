let x =-0;
console.log(x===0); //true - -0 is not equal to 0
console.log(x===-0); //true

//how to check if the value is -0 or not?

console.log(x.toString());//0
console.log(String(x));//0


console.log(Object.is(x,-0));//true
console.log(Object.is(x,0));//false


//math.sign function

console.log(Math.sign(-3));
console.log(Math.sign(2));
console.log(Math.sign(-0));
console.log(Math.sign(0));


console.log(x<0);//false 







