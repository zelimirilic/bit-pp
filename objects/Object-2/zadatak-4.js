// Write a function that finds the smallest element of a given array. 
// The function should return an object that contains the smallest value and its last position in the array.
'use strict';

function findSmalest(arr) {
    var minvalue = Math.min.apply(null, arr);
    var minIndex = arr.lastIndexOf(minvalue);
    var obj = {
        minNumber: minvalue,
        lastPos: minIndex
    }


    return obj;
}
console.log(findSmalest([2, 3, 4, 9, 8, 2, 1, 4, 8, 7, 9, 11]));
