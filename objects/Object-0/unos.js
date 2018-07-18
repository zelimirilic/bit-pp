var unos = function() {
    // PRIVATNA PROMENJIVA
    var unesenPodatak = '';
    // FUNKCIJA KOJA PRIHVATA UNOS
    function setPodatak(noviPodatak) {
        unesenPodatak = noviPodatak;
    }
    // FUNKCIJA KOJA PROSEDJUJE UNOS
    function getpodatak() {
        return unesenPodatak;
    }
    // JAVNO OTKRIVANJE METODA
    return {
        setPodatak: setPodatak,
        getpodatak: getpodatak
    };
}();