// example of the function closure

var addOne = function (passed) {

    var addTwo = function (inner) {
        return passed + inner;
    }
    return addTwo;
}

var deset = addOne(10);
var sto = addOne(100);
var hiljadu = addOne(1000);

console.log(deset(3), sto(6), hiljadu(9));
