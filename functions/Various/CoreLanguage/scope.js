

function buildFunction() {

    var arr = [];

    for (let i = 0; i < 3; i++) {
        //let j=i;
        arr.push(function () {
            console.log(i);
        });
    }

    return arr;
}

var fs = buildFunction();

fs[0]();
fs[1]();
fs[2]();