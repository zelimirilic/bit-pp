// Write a program that calculates the greatest common divisor of two integers. 
// Note: The greatest common divisor of two non-zero integers is the greatest positive number 
// that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9
'use strict'
function findNZD(num1, num2) {
    var x = Math.abs(num1);
    var y = Math.abs(num2);
    var min = Math.min(x,y); 
    for(var i=min; i>0; i--) {
        if(x % i === 0 && y % i ===0) {
            return i;
        }
    }

}

console.log(findNZD(192, 42));

