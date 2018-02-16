// Write a function that takes a number and returns array of its digits.
'use strict';
function returnDigit(num) {
    var strOfNum = ''+num;
    var newArr = [];
    for (var i=0; i<strOfNum.length; i++) {
        newArr[i] = strOfNum[i];
    }
    return newArr;
}
console.log(returnDigit(1015689));
