

function* director() {
    yield 'tri';
    yield 'dva';
    yield 'jedan';
    yield 'akcija !';
}
var action = director();

console.log(action.next());
console.log(action.next());
console.log(action.next());
console.log(action.next());
console.log(action.next());

// AND 

function* eachItem(arr) {
    for (var i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}
var leters = eachItem(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);

var slova = setInterval(function () {
    var leter = leters.next();
    if (leter.done) {
        clearInterval(slova);
        console.log('gotova abeceda !');
    } else {
        console.log(leter.value);
    }
}, 500);
