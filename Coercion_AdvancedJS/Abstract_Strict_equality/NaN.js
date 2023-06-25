//NaN != NaN (ONLY DATA TYPE WHICH IS NOT EQUAL TO IT SELF)

console.log(Number("123"));//123
console.log(Number("abcd"));//invalid number-nan


console.log(Number(0xa)); //10
let x =NaN;

console.log(x==NaN);//false

console.log(typeof x);//number


console.log(isNaN(x));//true

console.log(isNaN("vikas"));//true -it should technically give false 
//isNaN converts the incoming input to a number (use ToNumber abstract operation)
 // to resolve this we have another utility i.e Number.IsNaN

 console.log(Number.isNaN("vikas")); //false-Number.isNaN doesnt do coercion


 if(typeof(x)=='number' && x!=x){
    console.log(true);
 }
 





