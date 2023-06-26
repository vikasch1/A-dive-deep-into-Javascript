{
    var x =10;
}

//since var doesnt support block level scoping so it will act as a global scoped variable.


console.log(x);

if(true){
    var y=20;
}
console.log(y);


if(false){
   var z=30;
}
console.log(z);//undefined

{
    let xx=50;
}

console.log(xx);//error


