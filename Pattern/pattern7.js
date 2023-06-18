// function pattern7(n){
//     let nsp=n-2;
//     let nst=1
//     for(let row=1;row<=n;row++){
//         let str="";
//         for(let star=1;star<=nst;star++){
//             str+="*\t";
//         }
//         for(let space=1;space<=nsp;space++){
//             str+="\t";
//         }
//         for(let star=1;star<=nst;star++){
//             str+="*\t";
//         }
//         if(row<n/2){
//             nsp=nsp-2;
//             nst=nst+1;

//         }
//         else{
//             nsp=nsp+2;
//             nst=nst-1;
//         }
       
//         console.log(str);
//     }




// }
// pattern7(5);


function upper(n){
    for(let row=1;row<=(n-1)/2;row++){
        let str="";
        let ls=row;
        for(let star=1;star<=ls;star++){
            str+="*";
        }

        let sc=n-2*row;
        for(let space=1;space<=sc;space++){
            str+=" ";
        }

        let rs=row;
        for(let star=1;star<=rs;star++){
            str+="*";
        }

        console.log(str);

    }
}
function mid(n){
    let str="";
    for(let i=1;i<=n;i++){
        str+="*";
    }
    console.log(str);
}

function lower(n){
    for(let row=1;row<=(n-1)/2;row++){
        let str="";
        let ls=((n-1)/2)-row+1;
        for(let i=1;i<=ls;i++){
            str+="*";
        }

        let spc=2*row-1;
        for(let space=1;space<=spc;space++){
            str+=" ";
        }
        let rs=((n-1)/2)-row+1;
        for(let i=1;i<=rs;i++){
            str+="*";
        }
        console.log(str);

    }
}

function run(n){
    upper(n);
    mid(n);
    lower(n);
}



run(5);


