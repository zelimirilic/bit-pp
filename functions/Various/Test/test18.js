function array_diff(a, b) {
    var newArr = [];
    if (a.length === 0) {
        return a;
    }
    if (b.length === 0) {
        return a;
    }
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
        for (var j = 0; j < b.legth; j++) {
            console.log(b[j]);
            if (a[i] !== b[j]) {
                newArr.push(a[i]);
            }
            if (a[i] === b[j]) {
                delete a[i];
            }
        }
    }
    return newArr;
}

console.log(array_diff([11, 2, 31, 4], [11, 1, 22, 73]));