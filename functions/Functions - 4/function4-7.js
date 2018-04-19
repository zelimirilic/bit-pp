// Write a program that intertwines two arrays. 
// You can assume the arrays are of the same length.
'use strict';
function combTwins(arr1, arr2) {
    var newArr = [];
    var counter = 0;
    for (var i=0; i<arr1.length; i++) {
        newArr[counter] = arr1[i];
        counter++;
        newArr[counter] = arr2[i];
        counter++;
    }
    return newArr;
}

console.log(combTwins(["A", "B", "C", "D"], [1, 2, 3, 4]));
