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

arrayReplace([5,2,5],2,5)

let fruits = ['mango','bannana','apple'];

fruits.forEach((fruit,index,array) => {
    console.log('Number of Fruit:' , index + 1);
    console.log('current Fruit:' , fruit);
    console.log('Fruit List:' , ...array);
    console.log('------------------------------------------------------');
    
})



total price calculate

const cart = [
    {name:'phone',price:200},
    {name:'laptop',price:500},
    {name:'mouse',price:50},
];

let total = 0;
cart.forEach((product) => {
    total += product.price;
})

console.log(total);

// comment count

const comments = ['good','bad','good','excellent','good'];
let goodCount = 0;

comments.forEach((comment => {
    if(comment === 'good'){
        goodCount++;
    }
}))

// console.log(goodCount);

let numbers = [1,2,3,];

let result = [];

for(let i = 0;i < numbers.length;i++){
    result.push(numbers[i]*2)
}
// console.log(result);



let students = [
    {name:'elon',avg:40.9},
    {name:'tramp',avg:10.9},
    {name:'clinton',avg:15.9},
    {name:'mark',avg:39.9},
    {name:'bill',avg:38.9},
];
// console.log(students);
// console.log('students avg greater of Thirty seven ');


let playerWithAvgThirtySeven = [];
let playerFailed = []

for(let i = 0;i< students.length;i++){
    if(students[i].avg>=37){
        playerWithAvgThirtySeven.push(`${students[i].name} - ${students[i].avg}`)
    }else {
        playerFailed.push(`${students[i].name}-${students[i].avg}`)
    }
}

console.log('pass player :',playerWithAvgThirtySeven);
console.log('fail player :',playerFailed);
let avgThirtySeven = students.filter(student => student.avg>=37);
// console.log(avgThirtySeven);

let language = ['javascript','python','php','c#'];

function mapSujon(arr,fn){
    const newArr = [];

    for(let i = 0;i<arr.length;i++){
        newArr.push(fn(arr[i]))
    }
    return newArr;
}


const myArr = mapSujon(language,function(language){
    return language.length;
})

// console.log(myArr);

