// Write a program that calculates the sum of positive elements in the array.
'use strict';
function sumPozitive(arr) {
    var arrPoz = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            arrPoz += arr[i]; 
        }
    }
    return arrPoz;
}

console.log(sumPozitive([3, 11, -5, -3, 2]));
