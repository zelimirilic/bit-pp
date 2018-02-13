function rotate(array, k) {

    var firstPart = [];
    var secondPart = [];

    for (var i = k; i < array.length; i++) {
        secondPart[i] = array[i];
        
    }
    console.log(secondPart);
    for (var i = 0; i < array.length - k; i++) {
        firstPart[i] = array[i];
    }
    console.log(firstPart);

    var newArr = [];
    for (var i = 0; i < firstPart.length; i++) {
        newArr[i] = secondPart[i];
        newArr[i + 1] = firstPart[i];
    }

    return newArr;
}

console.log(rotate([1, 2, 3, 4, 5, 6], 3));