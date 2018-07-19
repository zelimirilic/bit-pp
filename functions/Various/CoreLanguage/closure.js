function doSomething(param) {
    return function () {
        console.log(param);
    }
}

var novaFn = doSomething('Hi friend !');

novaFn();
