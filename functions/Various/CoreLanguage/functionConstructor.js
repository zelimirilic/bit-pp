function Person(name, surname) {
    console.log(this);
    this.name = name;
    this.surname = surname;
    console.log('Invokovana !!!');
}
Person.prototype.getFullName = function () {
    return this.name + ' ' + this.surname;
}

var joham = new Person('Joham', 'Sprosti');
console.log(joham);

var jane = new Person('Joana', 'Burić');
console.log(jane);

console.log(joham.getFullName());
console.log(jane.getFullName());

