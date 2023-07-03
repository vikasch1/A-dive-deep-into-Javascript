function fun(){
    // for(var i=0;i<10;i++){
    //     //do something
    // }
    // console.log(i); //can access outside loop also
for(let i=0;i<10;i++){
    //do something

}

}



function process(x,y){
    if(x>y){
        let temp=x;
        x=y;
        y=temp;
    }
    return y-x;
}

fun();
