// Write a program that multiplies every positive element of a given array by 2.
'use strict'
function pozBytwo(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr[i] = arr[i] * 2;

        } else if (arr[i] <= 0) {
            newArr[i] = arr[i];

        }
    }
    return newArr;
}
console.log(pozBytwo([2, 3, 4.5, -3, 0, -7, 5]));