const iphone={
    name:"iphone",
    categoty:"electronics",
    price:100000,
    rating:4.7,
    display:function (){
        let iphonered={
            name:"iphonered",
            price:85000,
            print:()=>{
                console.log(this)
            }
        }
        iphonered.print();
    }

}

iphone.display();


