"use strict";

function brojPonavljanja(nekiNiz, number) {

    var counter = 0;
    for (var i = 0; i < nekiNiz.length; i++) {
        if (nekiNiz[i] === number) {
            counter++;
        }
    }

    return "Broj ponavljanja broja " + number + " je " + counter + '.';
}


console.log(brojPonavljanja([1, 1, 1, 1, 1, 2, 2], 1));
