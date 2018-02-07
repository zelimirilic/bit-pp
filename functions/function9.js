

function sum(nekiNiz) {
    var odd = 0;
    for (var i=0; i<nekiNiz.length; i++) {

        if (nekiNiz[i] % 2 !== 0) {
            odd += nekiNiz[i];
        } 

    }
    return odd
}

var zbirNeparnih = sum([2,4,6,8,10,5,12,14]);

console.log('Zbir neparnih brojeva vaseg niza iznosi ' + zbirNeparnih);
