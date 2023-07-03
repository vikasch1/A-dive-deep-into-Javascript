var teacher ="vikas"; //global scope
function fun(){ //global scope
    console.log(teacher);//mo error since var gives function scope, it wont give any error as we are calling it before even declaration.
    console.log(content);//error-reference error (TDZ cz of block scope (let)
    var teacher = "puneet"; //scope of fun 
    let content="js"; //content will be accessed only post declaration.
    if(content =="js"){
        let hours="120+"; //only accessible withion this block only
        console.log(hours);
    }
    console.log(teacher,content,hours); //hour will give error cz it has its block scoped

}
fun();
console.log(teacher);
console.log(content);//error
console.log(hours);//error


