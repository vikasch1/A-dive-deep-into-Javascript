const iphone={
    name:"iphone",
    categoty:"electronics",
    price:100000,
    rating:4.7,
    display:()=>{
        console.log(this);
    }

}

const macbook={
    name:"macbook",
    category:"electronics",
    price:150000,
    rating:4.8,
    display:function (){
        console.log(this);
    }

}
macbook.display();
iphone.display();

