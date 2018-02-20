// Write a function that checks if a given array has odd number of elements.
'use strict'

function hasOdd(arr) {
    var odd = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr.push.arr[i];
        }
    }
    return odd;
}

console.log(hasOdd [1, 2, 9, 2, 1]);