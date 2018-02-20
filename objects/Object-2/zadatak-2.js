// Write a functional expression that removes all duplicates in a given array.
'use strict'

var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var b = a.sort();
console.log(b);

for (var i = 0; i < b.length; i++) {
    for (var j=i; j< b.length; j++) {  
    if (b[i] === b[j]) {
        var c = b.pop(b[i]);
    }
    }
}



console.log(c);