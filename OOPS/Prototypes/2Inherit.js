class category{
    constructor(c){
        this.categoryname=c;
    }
}

class product extends category{
    constructor(n,c){
      super(c);
      this.name=n;
    }
}

const p = new product("iphone","mobile");
console.log(p);

