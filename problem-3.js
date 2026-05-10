/* give an array of integers, replace all the occurrences of element to replace with subraction element
for input array = [1,2,1] elementTOReplace = 1 and subtractonElem = 3, the output should be array replace(inputArray,elementToReplace,substrationElem) = [3,2,3] */

function arrayReplace(inputArray,elementToReplace,subractionElem) {
    inputArray.forEach((element,index) => {
        if(element === elementToReplace){
            inputArray[index] = subractionElem
        }
    })
    console.log(inputArray);
}

// arrayReplace([5,2,5],2,5)

// let fruits = ['mango','bannana','apple'];

// fruits.forEach((fruit,index,array) => {
//     console.log('Number of Fruit:' , index + 1);
//     console.log('current Fruit:' , fruit);
//     console.log('Fruit List:' , ...array);
//     console.log('------------------------------------------------------');
    
// })



//total price calculate

// const cart = [
//     {name:'phone',price:200},
//     {name:'laptop',price:500},
//     {name:'mouse',price:50},
// ];

// let total = 0;
// cart.forEach((product) => {
//     total += product.price;
// })

// console.log(total);

//comment count

const comments = ['good','bad','good','excellent','good'];
let goodCount = 0;

comments.forEach((comment => {
    if(comment === 'good'){
        goodCount++;
    }
}))

console.log(goodCount);