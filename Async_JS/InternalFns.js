let arr=[1,10,9,100,1000,11,12,13,14,2,3];

arr.sort(); //it sorts the given array // {expectation}->this might arrange elements in inc order

console.log(arr); // 1, 10, 100, 1000,11, 12,  13,   14,2,  3,   9
 
 //internally it does lexicographically sorting.

/***
 0-A
 1-B
 2-C
 3-D
 4-E
 5-F
 6-G
 7-H
 8-1
 9-J
 ...
 [B,BA,J,BAA,BAAA,BB,BC,BD,BE,C,D]-IF WE ARRANGE IT ACCORDING TO DICTIONARY
 [B,BA,BAA,BAAA,BB,BC,BD...]-OUTPUT ACC TO LAXOGRAPHICAL SORTING

 */

 let b=[1,10,9,100,1000,11,12,13,14,2,3];

 b.sort(function(a,b){
    return a-b; //if a<b ->a-b will be negative ->cmp function gives negative then a is placed before b.
//if a>b-> a-b will be positive -then cmp function will give posiitve ->b is placed before a.


 });//sort is a HOF..the sort function takes a comparator function as argument

 console.log(b);
 

