function greet(name, surname, language) {
    language = language || 'en';

    if(language === 'en') {
        console.log('Hello ' + name + ' ' + surname)
    }
    if(language === 'es') {
        console.log('Hola ' + name + ' ' + surname)
    }
}

greet('John', 'Smith', 'en');
greet('John', 'Smith', 'es');

