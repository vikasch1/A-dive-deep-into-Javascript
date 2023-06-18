function pattern6(n){
    let nsp=n/2;
    let nst=1;
    for(let row=1;row<=n;row++){
        let str="";
        for(let space=1;space<=nsp;space++){
            str+=" ";
        }
        for(let star=1;star<=nst;star++){
            str+="*";
        }
        if(row<=n/2){
            nsp=nsp-1;
            nst=nst+2;
        }else{
            nsp=nsp+1;
            nst=nst-2;

        }
        console.log(str);
        
    }





}

pattern6(5);
