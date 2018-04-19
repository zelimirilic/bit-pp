
'use strict';
function rotate(array, k) {
    var newArr = [];
    var counter = 0;
    

    for (var i = k; i < array.length; i++) {
        newArr[counter] = array[i];
        counter++;
    }
    for (var j = 0; j < k; j++) {
        newArr[counter] = array[j];
        counter++;
    }
    
    
    return newArr;
}
    


console.log(rotate([1, 2, 3, 4, 5, 6], 3));