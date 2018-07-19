

var newFun = function (x, y) {
    var inner = 2;
    return 'inner variable plus ' + x + ' plus ' + y + ' is ' + [x + y + inner];
}

console.log(newFun(5, 10));
console.log(newFun(15, 100));
console.log(newFun(55, 210));