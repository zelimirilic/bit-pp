var cat = {
    mjau(times) {
        console.log('mjauuuuuu'.repeat(times)); //Es6
    },
    purr: function(times) {
        console.log(Array(times+1).join('purrrrr'));    //ES5
    },
    hrrkk(times) {
        console.log('hrrrrr'.repeat(times));    //ES6
    }
}
cat.mjau(2);
cat.purr(3);
cat.hrrkk(7);