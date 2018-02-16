// Write a function to get the last element of an array. 
//Passing a parameter 'n' will return the last 'n' elements of the array.
function lastnElement(arr, n) {
    var newArr = [];
    var duz = arr.length - n;
    for (var i=arr.length-1; i>=duz; i--) {
        newArr[i] = arr[i];
    

    }
    return newArr;
}

console.log(lastnElement([true, false, 'nekiBroj', 4, 'pet', 6, 7, 8, 9, 10], 2));
