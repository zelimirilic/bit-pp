/* Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/
'use strict';
function printRec(arr) {
    //var arr1 = String(arr);
    var stars = '*';
    var picture = '';
    var newline = '\n';
    for (var i = 0; i < arr.length + 2; i++) {
        for (var j = 0; j < arr.length + 2; j++) {
            if (i === 0 || i === arr.length + 1) {
                picture += stars;
            } else if (j === 0 || j === arr.length + 1) {
                picture += stars;
            } else {
                for (var k = 0; k < arr.length; k++) {
                    
                        picture += arr[k];
                    
                    }
                }
            }
        }
        picture += newline;
    return picture;
}

console.log(printRec(["Hello", "World", "in", "a", "frame"]));

