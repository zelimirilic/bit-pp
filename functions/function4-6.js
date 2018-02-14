// Write a program that checks if a given array is symmetric. 
// An array is symmetric if it can be read the same way both from the left and the right hand side. 
'use strict';
function isSimetric(arr) {
    var mediana = parseInt(arr.length / 2);
    var answer = '';
    var match = 0;

    for (var i = 0; i < mediana; i++) {

        for (var j = arr.length; j > mediana; j--) {

            if (arr[i] === arr[j]) {
                match++;
            }
        }
    }
    if (match === mediana) {
        answer = 'The array is symmetric.';
    } else {
        answer = "The array isn't symmetric.";
    }

    return answer;
}

console.log(isSimetric([1, 5, 2, 4, -2, 7, -2, 4, 2, 5, 1]));
