// Write a functional expression that removes all duplicates in a given array.
'use strict'

var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var b = a.sort();
var newArr = [];
var count = 0;
console.log(b);

for (var i = 0, j = 1; i < b.length; i++ , j++) {
        if (b[i] !== b[j]) {
            newArr[count] = b[i];
            count++;
        }
    }

console.log(newArr);

