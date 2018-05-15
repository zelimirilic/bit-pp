//  looping through some array


var obj = {
    product: [{
        name: 'apples',
        price: 100
    },
    {
        name: 'milk',
        price: 80
    },
    {
        name: 'bananas',
        price: 150
    }
    ],

    totalSum: function () {
        var totalSum = 0;
        for (var i = 0; i < this.product.length; i++) {
            totalSum += this.product[i].price;
        }
        return totalSum;


    },
    average: function () {
        var average = 0;
        average = this.totalSum() / this.product.length;
        return average;
    },
    printMax: function () {
        var newArrPrice = [];
        for (var i = 0; i < this.product.length; i++) {
            newArrPrice[i] = this.product[i].price;
        }
        var max = newArrPrice.sort((a, b) => a - b);
        return this.product[max.length - 1].name;
    }

}

console.log(obj.totalSum());
console.log(obj.average());
console.log(obj.printMax());