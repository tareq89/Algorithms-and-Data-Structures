let array = require('./../../utility/array').array;
const printJustValues = require('./../../utility/printArray');

const selectionsort = (array) => {    
    let minimum;
    for(let i = 0;i < array.length; i++) {
        minimum = i;
        for(let j = i; j < array.length; j++) {            
            if(array[j].nested.value < array[minimum].nested.value) {                
                minimum = j;
            }
        }        
        // [ array[minimum], array[i] ] = [ array[i], array[minimum] ];
        let temp = array[i];
        array[i] = array[minimum];
        array[minimum] = temp;
    }
    return array;
}

let result = selectionsort(array);
printJustValues(result);