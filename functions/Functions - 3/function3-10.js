// Write a program to find the most frequent item of an array
'use strict';
function mostFreq(arr) {
    var counter = 0;
    var basicAppear = 1;
    var item;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
            if (basicAppear<counter) {
                basicAppear = counter
                item = arr[i];
            }
        }
        counter = 0;
    }
    return item + ' se ponavlja ' + basicAppear + ' puta';
}

console.log(mostFreq([3, 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9]));


 

