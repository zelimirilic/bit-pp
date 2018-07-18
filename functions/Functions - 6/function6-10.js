// Write a function to find the element that occurs most frequently.
'use strict'
function mostFrequent(arr) {
    var naj = 1;
    var brojPon = 0;
    var index;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                brojPon++;
            }
            if (brojPon > naj) {
                brojPon = naj;
                index = arr[i];
            }
        }
        var brojPon = 0;
    }
    return 'broj ' + index + ' se ponavlja ' + naj + ' puta.';
}

console.log(mostFrequent([2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 2, 9, 2, 1, 1, 1, 1, 1]));

