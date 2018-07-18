function reverseArr(array) {
    for (i = 0, j = array.length - 1; i < j; i++, j--) {
        rev = array[i];
        array[i] = array[j];
        array[j] = rev;
}
return array;
}

console.log(reverseArr([1,2,3,4,5,6,7, true, false, null, undefined]));

