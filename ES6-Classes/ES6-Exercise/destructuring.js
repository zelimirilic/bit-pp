var kartaOdmora = {
    hrana: 'pečenje',
    pivo: 'Staropramen',
    vino: 'Chianty',
    rakija: 'domaća',
    slatko: 'palačinke',
    torta: 'Moskva šnit',
    brojOsoba: 2,
    mesto: 'Urugvaj',
    cena: 1500

};
function uzivancija({ mesto, cena, brojOsoba, hrana, pivo, slatko }) {
    return `Dođite u ${mesto} i platite za ${brojOsoba} osobe samo ${cena * brojOsoba} dinara i nakrkajte se ${hrana} pa zalijte sa ${pivo} i zasladite sa ${slatko}.`
}

console.log(uzivancija(kartaOdmora));
