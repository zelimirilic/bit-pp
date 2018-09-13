// Write a function to find the average of N elements.
// Make the function flexible to receive dynamic number or parameters.
'use strict'
function avArrnum(arr) {
    var sumNum = 0;
    var averageNum = 0;
    for (var i = 0; i < arr.length; i++) {
        sumNum += arr[i];
    }
    averageNum = sumNum / arr.length
    return 'Average of ' + arr.length + ' elements of array is ' + averageNum;
}
console.log(avArrnum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


