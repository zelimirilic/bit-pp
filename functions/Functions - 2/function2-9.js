function convert(string, char) {
    var arr = [];
    for (var i = 0; i < string.length; i++) {
        arr[i] = string[i];
        if (arr[i] === ' ' && typeof char === "undefined") {
            arr[i] = "-";
        } else if (arr[i] === ' ') {
            arr[i] = char;
        }
    };
    var x = "";
    for (var j = 0; j < arr.length; j++) {
        x += arr[j];
    }
    return x;
}
console.log(convert(" ds a ", "+" ));