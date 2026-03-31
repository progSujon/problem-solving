/*
Problem : write a function in sum of two number.
*/

function sum(a,b) {
    console.log("sum of two number - ",a+b);
}

sum(20,20)


/*
    Problem statement 
    write a function that calculates and prints the area of a reactangle given its length and width.

    input : length and width
    area of a rectangle = length * width
*/


function rectAngle(height,width){

    if(height <= 0){
        throw new RangeError("height should be a positive number");
        //throw new RangeError(); ব্যবহার করা হয় যখন কোনো মান (value) তার allowed range-এর বাইরে চলে যায়।
    }

    if(width <= 0) {
        throw new RangeError("Width should be a positive number")
    }
    
    let rectangle = height * width ;
    console.log(rectangle);
}

rectAngle(20,40)
