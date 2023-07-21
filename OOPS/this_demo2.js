let products={
    arr:[
        {
            name:"iphone 13 pro max",
    price :1000000,
    description:"new iphone ",
    rating:4.8,
    getcategory:function print(){
        console.log(this.category);
    }

        },
        {
            name:"macbook m2",
            price :1500000,
            description:"new macbook ",
            rating:4.2,
            getcategory:function print(){
                console.log(this.category);
            }
        


        }
        
    ],
    category:"electronics",
    getproduct:function(){
        return this.arr;
    }

}

products.getproduct()[0].getcategory();




products.arr[0].getcategory();
