function* fetchnextElement(){
    const x=10;
    yield 11;
    console.log("entering after a yield");
    const y=x+(yield 30);
    console.log("value of y is ",y);

}

const iter=fetchnextElement();
console.log("first",iter.next());
console.log("second",iter.next());
console.log("third",iter.next(8));


// first { value: 11, done: false }
// entering after a yield
// second { value: 30, done: false }
// value of y is  18
// third { value: undefined, done: true }

