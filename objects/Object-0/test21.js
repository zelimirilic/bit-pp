

var a = 123;

var b = function f() {
    console.log(a);
    var a = 1;
    console.log(a);
}

b();

