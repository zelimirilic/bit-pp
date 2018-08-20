

var person = {
    name: 'Default',
    surname: 'Default',
    getFullname: function () {
        return this.name + ' ' + this.surname;
    }
}
var john = {
    name: 'John',
    surname: 'Doe'
}
john.__proto__ = person;
console.log(john.getFullname());



