// Write a program that inserts a given element e on the given position p in the array a. 
// If the value of the position is greater than the array length, print the error message. 
'use strict'
function insertEl(el, pos, arr) {
    var newArr = [];
    if (pos > arr.length) {
        console.log('This array does not have ' + pos + ' members !')
    }
    for (var i = 0; i < arr.length; i++) {
        if (i === pos) {
            arr[i] = el;
        }
        newArr[i] = arr[i];
    }

    return newArr;
}
console.log(insertEl('wow', 4, [0, 1, 2, 3, 4, 5, 6, 7, 8]));
