// Write a function to capitalize the first letter of a string.
var cap = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(cap("js string exercises"));
