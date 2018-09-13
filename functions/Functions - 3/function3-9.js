// Write a function to hide email address.
'use strict'
function hideAddress(str) {
    var hideEmail = "";
    var cut = "...";
    var first = "";
    var second = "";
    var firstFinal = "";
    var monkey = str.indexOf('@');
    for (var i = 0; i < monkey; i++) {
        first += str[i];

    }
    console.log(first);
    for (var j = monkey; j < str.length; j++) {
        second += str[j];

    }
    console.log(second);
    for (var k = 0; k < first.length - (first.length / 2); k++) {
        firstFinal += first[k];

    }
    console.log(firstFinal);
    hideEmail = firstFinal + cut + second;

    return hideEmail;
}

console.log(hideAddress("isprednesto_zelimir.ilic@gmail.rs"));
// konzolu sam stampao da vidim izvrsenje programa.....