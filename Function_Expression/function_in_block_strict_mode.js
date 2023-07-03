"use strict";
{
    function fun(){
        return "123";
    }
    console.log(fun); //its fine as it has block scope
}

console.log(fun); //error

//gives error
