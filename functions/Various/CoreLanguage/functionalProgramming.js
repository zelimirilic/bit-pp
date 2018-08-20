function mapOnEachElement(arr1, nekaFunkcija) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(
            nekaFunkcija(arr1[i])
        )
    };
    return newArr;
}

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr1);

var arr2 = mapOnEachElement(arr1, function () {
    return 3;
});
console.log(arr2);

var arr3 = mapOnEachElement(arr1, function (i) {
    return i % 2 === 0;
});
console.log(arr3);

var arr4 = mapOnEachElement(arr1, function (g) {
    return g * 2;
})
console.log(arr4);

var chekLimit = function (limiter, item) {
    return item > limiter;
}
var arr5 = mapOnEachElement(arr1, chekLimit.bind(this, 5));
console.log(arr5);

var chekNewLimit = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}
var arr6 = mapOnEachElement(arr1, chekNewLimit(3));
console.log(arr6);
