// Write a function to find all the numbers greater than the average.
'use strict';
function grthanAverage(arr) {
    var sumNum = 0;
    var average = 0;
    var greaterAverage = [];
    for (var i = 0; i < arr.length; i++) {
        sumNum += arr[i];
    }
    average = sumNum / arr.length;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > average) {
            greaterAverage[j] = arr[j];
        }
    }
    return 'Greater than average are ' + greaterAverage;
}

console.log(grthanAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

