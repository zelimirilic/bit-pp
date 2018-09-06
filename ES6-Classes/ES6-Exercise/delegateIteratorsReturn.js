// Delegating iterators with return

function* createNumIterator() {
    yield 1;
    yield 2;
    return 7;
}
function* creatingRepetingIterator(count) {
    for (let i = 0; i < count; i++) {
        yield 'Ponavlja - ' + i;
    }
    yield 'Toma';
    yield 'Gavra';
}
function* combineIterators() {
    let rezultat = yield* createNumIterator();
    yield* creatingRepetingIterator(rezultat);
}
let prikaz = combineIterators();
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());