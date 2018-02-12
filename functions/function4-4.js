// Write a program that finds the second largest number and prints out its value.
'use strict';
function secLargest(arr) {
    var largeNum = arr[0];
    var indexSeclarg;
    var secLar = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            largeNum = arr[i];
            indexSeclarg = i;
        }
    }
    arr[indexSeclarg] = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[j] > secLar) {
            secLar = arr[j];
        }
    }
    return secLar;
}
console.log(secLargest([4, 2, 13, -1, 6]));
