console.log(name);//cant access name before initialization but with var it shows undefined.
// let name="vikas";
var name="vikas";
function fun(){
    console.log(name);
}
fun();
console.log(name);


//name is a global variable .
//if we decare name with var it doesnt throw error


