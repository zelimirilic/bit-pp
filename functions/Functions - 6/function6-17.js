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
    var draw = "";
    var star = "*";
    var newLine = "\n";
    for (var i = 0; i < arr.length + 1; i++) {
        for (var j = 0; j < arr.length + 1; j++) {
            if (i === 0 || i === arr.length) {
                draw += star;
            } else if (j === 0 || j === arr.length) {
                draw += star;
            } else {
                draw += arr[i];
                break;
            }
        }
        draw += newLine;
    }
    return draw;
}

console.log(printRec(['t', "Hello", "World", "in", "a", "frame"]));
