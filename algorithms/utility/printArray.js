const printJustValues = (array) => {
	let printString = '';
	for(let index = 0; index < array.length; index++) {
		printString += ` ${array[index].nested.value} `;
	}
	console.log(printString)
}

module.exports = printJustValues;