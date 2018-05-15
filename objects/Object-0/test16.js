var name = " John";
function first() {
    var a = "Hello! ";
    second();
    var x = a + name;
    console.log(x);
}

function second() {
    var b = "Hi! ";
    third();
    var y = b + name;
    console.log(y);
}
function third() {
    var c = "Hey! ";
    var z = c + name;
    console.log(z);
}

console.log(first());
console.log(second());
console.log(third());