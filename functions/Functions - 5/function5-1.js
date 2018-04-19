// Find the min and max element in the following array and switch their places. 
// Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
'use strict';
function switchMinMax(arr) {
    var minEl = 0;
    var maxEl = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[maxEl] < arr[i]) {
            maxEl = i;
        }
        if (arr[i] < arr[minEl]) {
            minEl = i;
        }
    }
    var rotateVal;
    rotateVal = arr[minEl];
    arr[minEl] = arr[maxEl];
    arr[maxEl] = rotateVal;

    return arr;
}

console.log(switchMinMax([3, 500, 1221, 149, 53, 414, 1, 19]));

