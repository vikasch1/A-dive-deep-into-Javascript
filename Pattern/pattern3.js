function pattern3(n){
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
        nsp=nsp-1;
        nst=nst+1;
        console.log(str);

    }
  

  


    
}
pattern3(6);

