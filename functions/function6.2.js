function combine(arr1, arr2) {
    var newArr = [];

    var counter = 0;
    for (var i = 0; i < arr1.length; i++) {
        newArr[counter] = arr1[i];
        counter++;
        newArr[counter] = arr2[i];
        counter++;

    }

    return newArr;
}



console.log(combine(["A", "B", "C", "w"], [1, 2, 3, 5]));