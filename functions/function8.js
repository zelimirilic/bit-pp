"use strict";

function brojPonavljanja(nekiNiz, number) {
    
    var counter = 0;
    for (var i = 0; i < nekiNiz.length; i++) {
        if (nekiNiz[i] === number) {
            counter++;
        }
    }
    
    return counter;
}
var nasNiz = [1, 1, 1, 1, 1, 2, 2]

var result = brojPonavljanja(nasNiz,1);

console.log("brojPonavljanja broja " + result);
