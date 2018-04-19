// Write a program that displays all the combinations of two numbers between 1 and 7. 
// Don't display two of the same numbers at the same time. Display the number of possible combinations, 
// as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
'use strict';
function combOfTwo(num1, num2) {
    var string = "";
    var counter = 0;
    for (var i = num1; i <= num2; i++) {
        for (var j = num1; j <= num2; j++) {
            if (i !== j) {
                counter++;
                string += "( " + i + ", " + j + " )\n";
            }
        }
    }
    string += counter;
    return string;
}

console.log(combOfTwo(5, 7));