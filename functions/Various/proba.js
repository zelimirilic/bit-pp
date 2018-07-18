

function reducerka(arr) {
    for (var i = 0; i < arr.length; i++) {
        var x = arr.reduce(arr);
        console.log(x);
    }
    return x;
}
console.log(reducerka([1, 2, 3, 4, 5, 6]));