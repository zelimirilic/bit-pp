// join() function in example with remove last joined character '*'

function joinFun(objStr, sign) {
    var newStr = '';
    var newStr1 = '';
    for (var i = 0; i < objStr.length; i++) {
        newStr += objStr[i] + '*';
    }

    console.log(newStr);            //checking output

    for(var j=0; j<newStr.length-1;j++) {
        newStr1 += newStr[j];
    }
    console.log(newStr1);           //checking output
    console.log(typeof newStr1);    //checking output
    return newStr1;
}
console.log(joinFun('Petar', '*'));

