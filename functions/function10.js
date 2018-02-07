
function brojacSlova(rec) {
    var counter = 0;
    for (var i = 0; i < rec.length; i++) {
        if (rec[i] === "a" || rec[i] ==="A"){
            counter ++;
        }
    }
    return counter;
}

console.log(brojacSlova("tatAmata"));