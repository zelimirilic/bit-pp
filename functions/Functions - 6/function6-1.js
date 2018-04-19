//Write a function to count vowels in a provided string. 
//If you are  not aware of indexOf function, try to use switch statement.
'use strict';
function countVow(str) {
    var counter = 0;
    for (var i=0; i<str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            counter++;
        }
    }
    return counter;
}

console.log(countVow('mama i tata'));
