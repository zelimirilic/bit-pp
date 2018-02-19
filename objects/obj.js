function Solider(name, country, year) {
    this.name = name;
    this.kontinent = "Amerika";
    this.country = {
        kontinent: "Evropa",
        oruze: function () {
            return this.kontinent;
        }
    };

    this.year = function () {
        var d = new Date();
        var n = d.getFullYear();
        return this.name + " je dosao u Evropu iz " + this.country.kontinent + " pre " + (n - year) + " godina.";
    };
}

var american = new Solider("Marine", "USA", 1975);
var nacist = new Solider("Svaba", "Deutchland", 1941);

console.log(american.name);
console.log(american.year());
console.log(nacist.country.oruze());
console.log(nacist.kontinent);
console.log(nacist.year());