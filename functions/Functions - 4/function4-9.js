// Write a program that deletes a given element e from the array a. 
'use strict';
function delElement(el, arr) {
    for (var i=0; i<arr.length; i++) {
        if (el === arr[i]) {
            delete arr[i];
        }
    }
    return arr;
}

console.log(delElement(2, [4, 6, 2, 8, 2, 2]));
