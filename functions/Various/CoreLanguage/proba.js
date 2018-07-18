

var obj = {
    name: 'obj object',
    doSomething: function (x, y, z, q, a, b) {
        console.log(this.name + ' ' + x + ' ' + y + ' ' + z + ' ' + q + ' ' + a + ' ' + b);

    }
}
var foo = {
    name: 'foo object'
}
var bar = {
    name: 'bar object'
}

obj.doSomething.call(foo, 1, 2, 3, 4, true, null);
