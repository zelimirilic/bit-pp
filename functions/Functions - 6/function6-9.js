// Write a function to find the median element of array.
'use strict'
function findMedian(arr) {
    var medianapos = parseInt(arr.length / 2);
    var medianaElement = arr[medianapos];
    return 'Median element is ' + medianaElement;

}

console.log(findMedian([true, 1, 2, 3, 4, 5, 6, 7, 'string', null, undefined, false, 'neki pojam']));

