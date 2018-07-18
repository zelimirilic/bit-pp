// Power - Stepenovanje

function onPower(num, exp) {
    var value = num;
    for (var i = 1; i < exp; i++) {
        value = value * num;

    }
    return value;
}

console.log(onPower(5, 4));
