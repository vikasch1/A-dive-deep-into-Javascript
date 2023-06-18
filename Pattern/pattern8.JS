
function pattern8(n){
    
    for(let row=1;row<=n;row++){
        let nsp=n-row; 
        let str="";
        for(let space=1;space<=nsp;space++){
            str+=" ";
        }
        let counter=1;
        for(let num=1;num<=row;num++){
            str+=counter;
            counter++;
        }

        let counter2=row-1;
        for(let i=1;i<=row-1;i++){
            str+=counter2;
            counter2--;  

        }
        console.log(str);

    }
}
pattern8(5);
