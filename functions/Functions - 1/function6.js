
"use strict";
function zvezdice(a, b, c) {

    var z1 = "";
    var z2 = "";
    var z3 = "";

    var zvezdica = "*";

    for (var i = 0; i < a; i++) {
        z1 += zvezdica;
    }
    for (var j = 0; j < b; j++) {
        z2 += zvezdica;
    }
    for (var k = 0; k < c; k++) {
        z3 += zvezdica;
    }
    return z1 + "\n" + z2 + "\n" + z3;
}

console.log(zvezdice(5, 7, 9));