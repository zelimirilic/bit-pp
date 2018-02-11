//Write a function to create a specified number of elements with pre-filled numeric value array.

function elementsCreator (numEl, elem) {
    var newArr = [];
    for (var i=0; i<numEl; i++) {
        if (typeof elem === null ) {
            newArr += 'null';
        } 
        newArr[i] += elem[i];

    }

return newArr;
}
console.log(typeof newArr);
console.log(elementsCreator(3,0));
