// Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB
'use strict';
function reverseString(str) {
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];

    }
    return newStr;

}

console.log(reverseString('ygolonhceT fo etutitsnI edargleB'));
