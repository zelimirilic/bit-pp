// Write a functional expression that duplicates each element of a given array.
'use strict'


    var a = [2, 3, 1, 4];
    var b = [];

    for (var i = 0; i < a.length; ++i) {
        b.push(a[i]);
        b.push(a[i]);
    }
   

    
    console.log([b]);