// Write a program that finds the minimum of a given array and prints out its value and index. 
'use strict';
function minItem(arr) {
    var minItem = arr[0];
    var indexOfNum;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minItem) {
            minItem = arr[i];
            indexOfNum = i;
        }
    }
    return 'minimalni broj je ' + minItem + ' a njegov index je ' + indexOfNum;
}

console.log(minItem([4, 21, 2, -15, 6, 8, 5, 0, -1]));

