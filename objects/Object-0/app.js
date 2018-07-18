(function() {
    // "click handler" ZA UNOS PODATAKA (poziva funkciju iz modula unos.js)
    document.getElementById('entry').addEventListener('change', function() {
        unos.setPodatak(document.getElementById('entry').value);
    });

    // "click handler" ZA STARTOVANJE PRORAČUNA (poziva funkciju iz proracun.js)
    document.getElementById('calculate').addEventListener('click', function() {
        proracun.calculateScore();
    });
})();