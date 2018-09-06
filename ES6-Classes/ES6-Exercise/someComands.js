var msg = 'Hello World';
console.log('1 - ' + msg.startsWith('Hello'));
console.log('2 - ' + msg.endsWith('ello'));
console.log('3 - ' + msg.endsWith('d'));
console.log('xy'.repeat(3));
console.log('4 - ' + msg.includes('elx'));
console.log('5 - ' + msg.includes('d', 2));
var indent = 'hjk_'.repeat(2);
indentLevel = 1;
var newIndent = indent.repeat(++indentLevel); // iterator in this case has value 4
console.log(newIndent);
console.log('_______________');

var funcs = [];
var obj = {
    a: true,
    b: true,
    c: true
}

for (let key in obj) {
    funcs.push(function () {
        console.log(key);
    });
}

funcs.forEach(function (a) {
    a();
});
console.log('_______________');


