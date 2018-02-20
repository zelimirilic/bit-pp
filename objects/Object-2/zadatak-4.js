// Write a function that finds the smallest element of a given array. 
// The function should return an object that contains the smallest value and its last position in the array.
'use strict';

function findSmalest(arr) {
    var minvalue = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minvalue) {
            minvalue = arr[i];
        }
    }
    return minvalue;
}
console.log(findSmalest[2, 3, 1, 9, 8]);
