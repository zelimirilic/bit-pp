// Write a function that counts the number of elements less than the middle element.
//If the given array has an even number of elements, print out an error message. 
'use strict'
function retMiddle(arr) {
    var place = 0;
    if (arr.length % 2 !== 0) {
        place = parseInt((arr.length / 2) + 1);
    } else 
        return 'error masage - even number of elements'
    
    return place;
}
console.log(retMiddle([1, 8.1, 3, 6, 2.3, 44, 2.11]));
