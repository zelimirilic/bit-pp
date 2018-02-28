// Write a function that can pad (left, right) a string to get to a determined length.
// 	'0000', 123, 'l' -> 0123 
// '00000000', 123, '' -> 12300000

function putString(patern, str, position) {
    if (typeof str === 'undefined')
        return patern;
    if (position == 'l') {
        return (patern + str).slice(-patern.length);
    } else {
        return (str + patern).substring(0, patern.length);
    }
}

console.log(putString('0000', 123, '1'));
console.log(putString('00000000', 123, '')); 