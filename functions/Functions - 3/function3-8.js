//Write a function to find a word within a string.
function searchWord(str, word) {
    var completeMatch = 0;
    var someMatch = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (str[j] === word[j - i]) {
                    someMatch++;
                }
                if (someMatch === word.length) {
                    completeMatch++;
                }
            }
            someMatch = 0;
        }
    }
    return "Trazena rec '" + word + "' je pronadjena " + completeMatch + " puta.";
}
console.log(searchWord('Mala plava laguna', 'la'));
