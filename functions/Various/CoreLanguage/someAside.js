Array.prototype.dodatakMoj = 'dodatak!';
Object.prototype.dodatakMoj = 'josJedan !!!';


var obj = {
    name: 'Zeljko',
    surname: 'Ilić',
    year: 1972,
    dateOfBirth: 'October-5'
}
var arr = ['john', 'jane', 'julija', 'Petkana'];

for (var prop in obj) {
    console.log(prop + ': ' + obj[prop]);
}

for (var prop in arr) {
    console.log(prop + ': ' + arr[prop])
}
