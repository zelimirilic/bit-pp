// Write a function to hide email address.
'use strict'
function hideAddress(str) {
    var hideEmail = "";
    var cut = "...";
    var first = "";
    var second = "";
    var secondFinal = "";
    for (var i = 0; i < (str.length) / 2; i++) {
        first += str[i];
        
    }
    console.log(first);
    for (var j = (str.length) / 2; j < str.length; j++) {
        second += str[j];
       
    }
    console.log(second);
    for (var k = 3; k < second.length; k++) {
        secondFinal += second[k];
        
    }
    console.log(secondFinal);
    hideEmail = first + cut + secondFinal;

    return hideEmail;
}

console.log(hideAddress("myemailaddress@bgit.rs"));
// konzolu sam stampao da vidim izvrsenje programa.....