let array = require('./array').array;

const quickSort = (array, lowIndex, highIndex) => {	

	if(array.length > 1) {
		const partitionIndex = getPartitionIndex(array, lowIndex, highIndex);
		if (lowIndex < partitionIndex - 1) {
			quickSort(array, lowIndex, partitionIndex - 1);
		}
		
		if (highIndex > partitionIndex) {		
			quickSort(array, partitionIndex, highIndex);
		}		
	}
	
	return array;
}

// The key process in quickSort is partition. Target of partition is, given an array
// and an element x of array as pivotIndex, put x at its correct position in sorted array.
// Put all smaller elements before x, put all bigger elements after x. All these should
// be done in linear time
const getPartitionIndex = (array, lowIndex, highIndex) => {
	const pivotIndex = Math.floor((lowIndex + highIndex) / 2);	
	let i = lowIndex;
	let j = highIndex;
	while(lowIndex <= highIndex) {

		while(array[lowIndex].nested.value < array[pivotIndex].nested.value) {
			lowIndex++;
		}

		while(array[highIndex].nested.value > array[pivotIndex].nested.value) {
			highIndex--;
		}

		if(lowIndex <= highIndex) {
			[ array[lowIndex], array[highIndex] ] = [ array[highIndex], array[lowIndex] ];
			highIndex--;
			lowIndex++;
		}
	}
	return lowIndex;
}

const printJustValues = (array, pivotIndex, lowIndex, highIndex) => {
	let printString = '';
	for(let index = lowIndex; index <= highIndex; index++) {
		printString += ` ${array[index].nested.value} `;
	}
	console.log(printString)
}

let lowIndex = 0;
let highIndex = array.length - 1;
printJustValues(array, 7, lowIndex, highIndex)
var newArray = quickSort(array, lowIndex, highIndex);
printJustValues(newArray, 7, lowIndex, highIndex)