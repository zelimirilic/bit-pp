// Write a program that checks if a given element e is in the array a. 
'use strict'
function findElement(arr, item) {
    var match = 0;
    var answer = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            match++;
        }

    }
    if (match > 0) {
        answer = 'yes';
    } else {
        answer = 'no';
    }
    return answer;
}

console.log(findElement([5, -4.2, 3, 7], 8));

