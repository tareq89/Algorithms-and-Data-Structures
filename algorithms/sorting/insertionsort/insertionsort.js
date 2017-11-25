let array = require('./../../utility/array').array;
const printJustValues = require('./../../utility/printArray');

const insertionsort = (array) => {
    for ( let i = 0; i < array.length; i++ ) {
        for ( let j = i; j < array.length; j++ ) {
            if(array[j].nested.value < array[i].nested.value) {
                [ array[i], array[j] ] = [ array[j], array[i] ];
            }
        }
    }
}

insertionsort(array);
console.log(array);