function greet(name, surname, language) {
    language = language || 'en';

    if(language === 'en') {
        console.log('Hello ' + name + ' ' + surname)
    }
    if(language === 'es') {
        console.log('Hola ' + name + ' ' + surname)
    }
}

function greetEnglish(name, surname) {
    greet(name, surname, 'en');
}
function greetSpanish(name, surname) {
    greet(name, surname, 'es');
}

greetEnglish('John', 'Smith');
greetSpanish('John', 'Smith');