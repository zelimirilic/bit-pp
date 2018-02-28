// Write a program that accepts a string as input and swaps the case of each character. 
// For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
function opositCase(str) {
    var velika = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var mala = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];

    for (var i = 0; i < str.length; i++) {
        if (velika.indexOf(str[i]) !== -1) {
            result.push(str[i].toLowerCase());
        } else if (mala.indexOf(str[i]) !== -1) {
            result.push(str[i].toUpperCase());
        } else {
            result.push(str[i]); // empty place
        }
    }

    return result.join('');
}

console.log(opositCase('The Quick Brown Fox'));
