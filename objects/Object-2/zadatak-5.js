// Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]
'use strict';
function findEl(arr, num) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(findEl([2, 3, 8, -2, 11, 4], 6));

