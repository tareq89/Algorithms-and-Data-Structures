let array = require('./../../utility/array').array;
const printJustValues = require('./../../utility/printArray');

const bubblesort = (array) => {
    let swapped = true;
    
    while(swapped) {
        swapped = false;
        for ( let i = 1; i < array.length; i++ ) {
            let j = i - 1;
            if(array[i].nested.value < array[j].nested.value) {
                [ array[i], array[j] ] = [ array[j], array[i] ];
                swapped = true;
            }
        }
    }
}

bubblesort(array);
printJustValues(array);