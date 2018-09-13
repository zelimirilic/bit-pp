function combine(arr1, arr2) {

    var newArr = [];

    for (var i = 0; i < arr1.length; i++) {
        if (newArr[i] == 'undefined') {
            delete [newArr[i]];
        }

        newArr += arr1[i];
        console.log(newArr);
        newArr += arr2[i];
        console.log(newArr);

    }

    return newArr;
}



console.log(combine(["A", "B", "C", "w"], [1, 2, 3, 5]));