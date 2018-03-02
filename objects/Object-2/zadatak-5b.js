// Write a function that finds all the elements in a given array that start with the “pro” substring.
// The function should be case insensitive. 
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// Output: [’Programming’, ‘product’]
'use strict';
function findPro(arr, str) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i].search(str);
        if (newArr[i] !== -1) {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}
console.log(findPro(['JavaScript', 'Programming', 'fun', 'product'], 'pro'));
