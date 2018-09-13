// Sort a previously defined array. Place its sorted values into a 
// new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
//Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
'use strict';
function sortArr(arr, callback) {
    var niz = [];
    niz = arr.sort(function (a, b) {
        return a - b
    });
    for (var i = 0; i < niz.length; i++) {
        niz[i] = callback(niz[i]);
    }
    return niz;
}
function multBy2(niz) {

    return niz * 2;
}

console.log(sortArr([13, 11, 15, 5, 6, 1, 8, 12], multBy2));
