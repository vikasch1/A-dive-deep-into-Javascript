function pattern4(n){
    let nsp=n-1;
    let nst=1;
    for(let row=1;row<=n;row++){
        let str="";
        for(let space=1;space<=nsp;space++){
            str+=" ";
        }
        for(let star=1;star<=nst;star++){
            str+="*";
        }
        console.log(str);
        nsp=nsp-1;
        nst=nst+2;




    }
}
pattern4(5);
