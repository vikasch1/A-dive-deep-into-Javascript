class product{
        #name;   //private property
    // price;
    // description;

    constructor(n,p,d){
        this.#name=n;
        this.price=p;
        this.description=d;

        // return 10; // no effect on returning a primitive

        // return {};  // return empty object
        // return this;

    }

    setname(n){
        if(typeof(n)!='string'){
            console.log("inavlid name pass")
            return;
        }
        this.#name=n;
    }

   set setprice(p){
        if(p<0) return;
    }

   get getname(){
        return this.#name;
    }

    display(){
        console.log(this.#name,this.price,this.description)

    }
}

const p= new product("bag",1500,"a cool bag");
p.setname("phonebox");
console.log(p);
p.display();



console.log("----",p.getname);










