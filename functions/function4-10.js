// Write a program that inserts a given element e on the given position p in the array a. 
// If the value of the position is greater than the array length, print the error message. 
'use strict'
function insertEl(el, pos, arr) {
    var newArr = [];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i === pos) {
            arr[i] = el;
        }
        newArr[counter] = arr[i];
        counter++;
    }
    return newArr;
}

console.log(insertEl('wow', 3, [0, 1, 2, 3, 4, 5, 6, 7, 8]));
