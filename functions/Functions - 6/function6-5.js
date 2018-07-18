// Write a program that prints a multiplication table for numbers up to 12.
'use strict';
function multiTwelve(num) {
    var newStr = '';
    for (var i=1; i<=num; i++) {
        for (var j=1; j<=num; j++) {

            newStr += j + ' * ' + i + ' = ' + i*j + '\n';

        }
    }

return newStr;
}
console.log(multiTwelve(12));

