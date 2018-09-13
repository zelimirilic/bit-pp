// Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false
'use strict';
function isPrime(num) {
    if(num === 1) {
        return 'Broj 1 nije ni prost ni slozen broj !';
    }
    if(num === 2) {
        return true;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } 
        
    }
   return true; 
}
console.log(isPrime(43));
