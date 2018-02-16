function falsyOut(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {

        if (arr[i] === undefined || arr[i] === null || !!arr[i] === !!NaN || arr[i] === false || arr[i] === 0 || arr[i] === '') {
            
        } else {
            newArr[i] = arr[i];
        }

    }
    return newArr;
}

console.log(falsyOut([NaN, 0, 15, false, -22, '', undefined, 47, null]));
