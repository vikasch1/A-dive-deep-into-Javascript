function solveeqn(a,b,c){
    let sqrtvalue=Math.sqrt(b*b-4*a*c);
    let root1=(-b+sqrtvalue)/(2*a);
    let root2= (-b-sqrtvalue)/(2*a);

    console.log(root1,root2);


}

solveeqn(2,5,3);
