

var Pizza = function () {
    var crust = 'taman';
    this.hasBacon = true;
    var nadev = 3;

    this.getCrust = function () {
        return crust;
    }

    this.getHasBacon = function () {
        return this.hasBacon;
    }

    this.getNadev = function () {
        return nadev;
    }

}

var pizzaA = new Pizza();
console.log(pizzaA.getNadev());

