function prva() {
    console.log('Evo je prvaaaa !!!');
    return function druga() {
        return console.log('Evo je drugaaa !!!');
    };
}

console.log(prva());