let iphone={
    name:"iphone 13 pro max",
    price :1000000,
    description:"new iphone ",
    rating:4.8,


    display(){
        console.log("first display",this);
    }
}



let macbook={
    name:"macbook m2",
    price :1500000,
    description:"new macbook ",
    rating:4.2,


    display(){
        console.log("second display",this);
    }
}


console.log(iphone,macbook);
console.log("-------------------------------");
iphone.display();


