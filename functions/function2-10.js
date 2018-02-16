// ovo je za zadnjih n karaktera

function cuter(word, n) {
    var points = "...";
    var newWord = "";
    var finalWord = "";
    for (var i = 0; i < word.length - n; i++) {
        newWord += word[i]
    }
    finalWord = newWord + points;
    return finalWord;
}

console.log(cuter('pobedili smo sve', 4));



// ovo je za prvih n karaktera
// function cuter(word, n) {
//     var points = "...";
//     var newWord = "";
//     var finalWord = "";
//     for (var i = 0; i <  n; i++) {
//         newWord += word[i]
//     }
//     finalWord = newWord + points;
//     return finalWord;
// }

// console.log(cuter('pobedili smo sve', 4));
