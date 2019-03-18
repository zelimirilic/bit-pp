

var pivara = new Vue({
    el: '#pivara',
    data: {
        beers: [
            {name:'Otrov', abv:15.6},
            {name:'Lav', abv:9.6},
            {name:'Jelen', abv:7.2},
            {name:'Zajecarsko', abv: 6.5},
            {name:'Staropramen', abv:5.2},
            {name:'Valjevsko', abv:4.5}
        ],
        maxAbv: 8.0
    }
});