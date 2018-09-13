function createObject(novaKlasa) {
    return new novaKlasa();
}
let obj = createObject(class {
    sayHi() {
        console.log('Haaaj !');
    }
})

obj.sayHi();
