// Calculate year of birth

var person = {
    calculateAge: function () {
        var year = new Date().getFullYear();
        console.log(year);
        var age = year - this.yearOfBirth;
        console.log(age);
    }
 }
 
 var john = Object.create(person);
 john.yearOfBirth = 1972;
 john.calculateAge();
 