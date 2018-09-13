// Write a program that finds the second largest number and prints out its value.
'use strict';
function secLargest(arr) {
    var newArr = [];
    newArr = arr.sort(function (a, b) {
        return b - a;
    })

    return newArr[1];
};

var final = secLargest([14, 4, 2, 13, -1, 16, 45, 7, 8, 9])
console.log('Second largest number in this array is number ' + final + '.');
