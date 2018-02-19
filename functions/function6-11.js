// Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. 
// If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
'use strict'
function fmlBack(arr) {
    var x = arr.length;   
        if (x === 0) {
            return arr; 
        } else if (x % 2 === 1) {
            return arr[0] + ' is first, ' + arr[x/2-0.5] + ' is midlle and '  + arr[x-1] + ' is last element.';
        } else {
            return arr[0] + ' is first, ' + arr[x-1] + ' is last element.';
        }
    }
    

console.log(fmlBack([1, 2, 3, 4, 5, 6, 7]));

