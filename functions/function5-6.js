// Write a program that uses a loop to add all the even numbers from 1 to 1000 
// and subtracts all the odd numbers 1 to 500 from the calculated sum.
// The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000
'use strict';
function seriousCalc (x,y,z) {
    var evenTh = 0;
    var evenFive = 0;
    
    for (var i=1; i<=x; i++) {
        if (i % 2 === 0) {
            console.log(i);
            evenTh += i;
        }
    }
    for (var j=1; j<=y; j++) {
        if (j % 2 !== 0) {
            console.log(j);            
            evenFive += j;
        }
    }
    return (evenTh-evenFive)*z
}

console.log(seriousCalc(1000,500,12.5));
