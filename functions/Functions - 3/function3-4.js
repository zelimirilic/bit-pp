function reverseNum(num) {
    var str = String(num);
    var newStr = '';
    var newNum = 0;
    for (i = str.length; i > 0; i--) {
        newStr += i;

    }
    newNum = parseInt(newStr);

    return newNum;
}

console.log(reverseNum(12345));
