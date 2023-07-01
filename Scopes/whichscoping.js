var teacher="vikas"; //vikas-global scope-vikas
function ask(question){ //ask-global scope,question-ask
    console.log(teacher,question);  //vikas why

}
function fun(){ //fun-global scope
    var teacher="rahul"; //teacher-fun scope-rahul
    ask("why")
}
fun(); 
//vikas why
