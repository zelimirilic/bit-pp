// Write a function to find the maximum and minimum elements. Function returns an array.
'use strict'
function maxMin(arr) {
    var max = arr[0];
    var min = arr[0];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return 'maximun number is ' + max + ' and ' + 'minimum number is ' + min + '.';
}
console.log(maxMin([1, 2, 3, 4, 5, 7, 8, 9]))