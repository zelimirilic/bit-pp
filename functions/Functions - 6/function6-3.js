'use strict';
function rotate(array, k) {
    var newArr = [];
    var counter = 0;

    for (var i = k; i < array.length; i++) {
        newArr[counter] = array[i];
        counter++;
    }
    for (var i = 0; i < k; i++) {
        newArr[counter] = array[i];
        counter++;
    }

    return newArr;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));