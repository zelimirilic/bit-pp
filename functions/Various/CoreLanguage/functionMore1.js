// same as functionMore2.js but with SHIHFT built-in in loop in diff function
// We can use call or apply function whatever...

var calculate = function () {
    var fn = Array.prototype.pop.call(arguments);
    return fn.apply(null, arguments);
}

var sum = function () {
    var total = 0;
    console.log(arguments.length)       // We just measure length of arguments
    for (var i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;
}

var diff = function () {
    //var total = arguments[0];
    var total = Array.prototype.shift.call(arguments);
    console.log(arguments.length)       // We just measure length of arguments
    for (var i = 0; i < arguments.length; i++) {
        total = total - arguments[i];
    }
    return total;
}
var sumResult = calculate(1, 2, 3, 4, 5, sum);
var diffResult = calculate(1, 2, 3, 4, 5, diff);

//console.log(sum(8, 9));
//console.log(diff(8, 9));

console.log(sumResult);
console.log(diffResult);


