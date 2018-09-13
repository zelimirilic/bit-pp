// Write a program that calculates the least common multiple of two integers. 
// Note: The least common multiple of two non-zero integers  is the smallest positive 
// that is divisible by both numbers with no remainder.
// Input:  18 12 | 45 15
// Output: 36    | 45
'use strict'
function findNZS(num1, num2) {
    var x = Math.abs(num1);
    var y = Math.abs(num2);
    var min = Math.min(x, y);

    for (var i = min; i >= 0; i--) {
        if (x % i === 0 && y % i === 0) {
            i;
            break;
        }
    }
    console.log(i)              // Just control values
    var x1 = x / i;
    var y1 = y / i;
    console.log(x1)
    console.log(y1)

    for (var j = x1; j >= 0; j--) {
        if (x1 % j === 0) {
            j;
            break;
        }
    }
    console.log(j);             // Just control values
    for (var k = y1; k >= 0; k--) {
        if (y1 % k === 0) {
            k;
            break;
        }
    }
    console.log(k);             // Just control values

    return i * j * k;
}

console.log(findNZS(18, 12));