function fetchNextElement(array){
    let idx=0;
    function next(){
        if(idx==array.length){
            return undefined;
        }
        const nextelt=array[idx];
        idx++;
        return {value:nextelt,done:false};

    }
    return {next}
}

const automaticfetcher=fetchNextElement([99,78,65,33,55,21,35,8,6,4,6,7,10,2,1]);
console.log(automaticfetcher.next());
console.log(automaticfetcher.next());
console.log(automaticfetcher.next());
console.log(automaticfetcher.next());
console.log(automaticfetcher.next());




//declarative kind of code




