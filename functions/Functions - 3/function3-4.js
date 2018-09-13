function reverseNum(num) {
    var str = String(num);
    var newStr = '';
    var newNum = 0;
    for (i = str.length; i > 0; i--) {
        newStr += i;

    }
    newNum = parseInt(newStr);
    // console.log(typeof newNum);  only chek typeof from variable

    return newNum;
}
var g = reverseNum(12345)
console.log(g);
