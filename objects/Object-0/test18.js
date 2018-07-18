// This - keyword8

function Car(type) {
    this.type = type + '_car';

    this.printCar = function () {
        console.log(type);
        console.log(this.type);

        inner();

        console.log(this);
        var that = this;
        var thisObj = this;

        function inner() {
            console.log(this);
            console.log(that);
            console.log(thisObj);
        }
    }

    this.printCarType = (function (that) {
        console.log(this);
        console.log(that.type);
    })(this)
};

var opel = new Car('opel');

opel.printCar();
opel.printCarType;
