
'use strict';
function combine(arr1, arr2) {
    var newArr = [];

    var counter = 0;
    for (var i = 0; i < (arr1.length+arr2.length)/2; i++) {
        newArr[counter] = arr1[i];
        counter++;
        newArr[counter] = arr2[i];
        counter++;

    }

    return newArr;
}



console.log(combine(["A", "B", "C"], [1, 2, 3, 5]));