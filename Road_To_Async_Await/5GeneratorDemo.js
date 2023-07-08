function* fetchNextElement(){
    console.log("i am inisde generator fun");
    yield 1;
    yield 2;
    console.log("somewhere in bw");
    yield 3;
    yield 4;

}


const iter=fetchNextElement();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


