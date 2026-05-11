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

