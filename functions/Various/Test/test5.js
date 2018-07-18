var a=1;
function calc() {
    a = 3;
    var a;
    //console.log(a);
    return a + 10;
}

console.log(calc());
console.log(a + calc());
