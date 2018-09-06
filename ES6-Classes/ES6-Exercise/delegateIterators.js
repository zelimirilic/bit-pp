// Delegating iterators

function* createNumIterator() {
    yield 1;
    yield 2;
}
function* createColorIterator() {
    yield 'red';
    yield 'green';
}
function *combineIterators() {
    yield *createNumIterator();
    yield *createColorIterator();
    yield 'Zeljko';
}

let prikaz = combineIterators();
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());
console.log(prikaz.next());