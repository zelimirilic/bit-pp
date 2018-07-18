function doSomething(param) {
    return function () {
        console.log(param);
    }
}

var novaFn = doSomething('Ćao prijatelju!');

novaFn();
