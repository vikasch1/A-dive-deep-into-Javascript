function pattern5(n){
    let nst=n;
    for(let row=1;row<=n;row++){
        let str="";
        for(let i=1;i<=nst;i++){
            str+="*";
        }
        nst=nst-1;
        console.log(str);


    }
}
pattern5(5);
