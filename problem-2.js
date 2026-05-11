/*
2.
Write a function that returns the sum of two numbers.
Write a function that returns the sum of all numbers regardless of # of params.

Example
For paraml = 1 and param2 = 2, the output should be add (paraml, param2) = 3.

Hints---
-Arithmetic Operators
-Rest Operators 
-forEach)
*/


function totalSum(...params1){
    let total = 0;
    params1.forEach((elem)=>{
        total += elem;
    })
    return total;
}

const sum = totalSum(1,2,3);
console.log(sum);


