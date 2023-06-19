let x =3423;
let temp=x;
let sum=0;
while(temp>0){
    let ld=temp%10;
    
    sum=sum+ld;
    temp=Math.floor(temp/10);
   
}
console.log(sum);

