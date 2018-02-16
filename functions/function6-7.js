// Write a function to find the maximum element in array of numbers. 
// Filter out all non-number elements.
'use strict'
function maxElArr(arrNum) {
    var realNum = [];
    var counter = 0;
    var maxNum;
    for (var i = 0; i < arrNum.length; i++) {
        if (typeof arrNum[i] === 'number') {
            realNum[counter] = arrNum[i];
            counter++;
        }
    }
    var maxNum = realNum[0];
    for (var j = 1; j <= realNum.length + 1; j++) {
        if (arrNum[j] > maxNum) {
            maxNum = arrNum[j];

        }
    }

    return maxNum;
}

console.log(maxElArr([1, 3, true, 1, 'string', 5, 7, 9, 12]));

