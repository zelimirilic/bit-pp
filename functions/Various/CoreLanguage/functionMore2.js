// We can use call or apply function whatever...

var calculate = function () {
    var fn = Array.prototype.pop.apply(arguments);
    return fn.apply(null, arguments);
}
var sum = function () {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;
}
var diff = function () {
    var total = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        total = total - arguments[i];
    }
    return total;
}
var sumResult = calculate(1, 2, 3, 4, 5, sum);
var diffResult = calculate(1, 2, 3, 4, 5, diff);

console.log(sumResult);
console.log(diffResult);