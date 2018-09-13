function brojPonavljanjaSlova(rec, trazenoSlovo) {

    var brojPonavljanja = 0;
    var duzinaReci = rec.length;
    for (var i = 0; i < duzinaReci; i++) {

        var trenutnoSlovoIzReci = rec[i];
        if (trenutnoSlovoIzReci === trazenoSlovo) {

            brojPonavljanja++;

        }

    }
    return brojPonavljanja;
}

console.log(brojPonavljanjaSlova('mama mama m', 'm'));

