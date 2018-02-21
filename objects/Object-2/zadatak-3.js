// Write a function that checks if a given array has odd number of elements.
'use strict'

function hasOdd(arr) {
    if (arr.length % 2 !== 0) {
         console.log('given array has odd number of element');
    } else {
         console.log('given array has not odd number of element');
    }
    return arr.length;
}

console.log(hasOdd([1, 2, 9, 2, 1, 1]));



