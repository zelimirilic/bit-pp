// trasform array's elements to string array's elements and back new array 
'use strict';

var input = [1, undefined, 2, NaN, 3, 4, 5, "six"];
var output = transformArray(input, function (param) {
    return param + "";
});

console.log(output);

function transformArray(array, single) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        newArr[i] = single(element);
    }
    return newArr;
}

