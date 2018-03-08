class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    print() {
        return `${this.name} | ${this.surname}`;
    }
}

class Programer extends Person {
    constructor(name, surname, language) {
        super(name, surname)
        this.language = language;
    }
    print() {
        return `${super.print()} | ${this.language}`;
    }
    learnedNewLanguage(language){
       this.language.push(language)
    }
}


const programmerOne = new Programer("Marko", "Arsic", ["JavaScript", "Kotlin"]);
console.log(programmerOne);
programmerOne.learnedNewLanguage(`c++`);
console.log(programmerOne.print());
