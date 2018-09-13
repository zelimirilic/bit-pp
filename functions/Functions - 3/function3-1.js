
function insertString(input, string, place) {
    var newString1 = "";
    var newString2 = "";
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (i < place) {
            newString1 += string[i];
        } else if (i >= place) {
            newString2 += string[i];
        }

    }
    newString = newString1 + " " + input + " " + newString2;

    if (place === " " || typeof place === "undefined") {
        newString = input + " " + string;

    }
    return newString;
}

console.log(insertString("JavaScript", "moja recenica je lepa", 13));

