function product(n,p,d){
    this.name=n;
    this.price=p;
    this.description=d;

    this.display=function(){
        console.log(this);
    }

    return {};



}

const p = new product("bag",2000,"a small bag");
console.log(p);
console.log("------------------------------------------");

// p.display();
