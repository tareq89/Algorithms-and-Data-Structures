let array = require('./../../utility/array').array;
const printJustValues = require('./../../utility/printArray');

const mergesort = (array) => {
    if(array.length < 2) {
        return array;
    }
    else {
        let middleIndex = array.length/2;
        let leftArray = array.slice(0, middleIndex);
        let rightArray = array.slice(middleIndex);
        return merge(mergesort(leftArray), mergesort(rightArray));
    }
}

const merge = (leftArray, rightArray) => {
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    let workingArray = [];

    while(leftArrayIndex < leftArray.length && rightArrayIndex < rightArray.length) {
        if(leftArray[leftArrayIndex].nested.value <= rightArray[rightArrayIndex].nested.value) {
            workingArray.push(leftArray[leftArrayIndex++]);
        } else {
            workingArray.push(rightArray[rightArrayIndex++]);
        }                
    }
    workingArray = workingArray.concat(leftArray.slice(leftArrayIndex), rightArray.slice(rightArrayIndex));
    return workingArray;
}


const result = mergesort(array);
printJustValues(result);