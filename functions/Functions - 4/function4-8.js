// Write a program that concatenates two arrays. 
'use script';
function concateArr(arr1, arr2) {
    var newArr = [];
    var counter = 0;
    for (i = 0; i < arr1.length; i++) {
        newArr[counter] = arr1[i];
        counter++;
        newArr[counter] = arr2[i];
        counter++;
    }
    return newArr;
}

console.log(concateArr(['e', 'r', 3, 2], [9, 45, 'ds', 'rt']));
