// Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
'use strict';
function sortArr(arr) {
    var niz = [];
    niz = arr.sort(function (a, b) {
        return b - a;
    });
    for (var i = 0; i < sortArr.length; i++) {
        niz[i] = arr[i];
    }
    return niz;
}

console.log(sortArr([13, 11, 15, 5, 6, 1, 8, 12]));

