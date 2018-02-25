// Check if a given string is a palindrome.
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true
"use strict"

function palindrome(str) {
    var str = str.toLowerCase();
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    if (str === newStr) {
        return true;

    }

    return false;
}


console.log(palindrome("eye"));