//Write a function that says whether a number is perfect

function perfNumber(num) {
    var skupDelilaca = 0;
    var perfectNumber = 0;
    for (i=0; i<num; i++) {
        if (num % i === 0) 
            skupDelilaca += i;
        }
        console.log('zbir delilaca je ' + skupDelilaca);
    if (skupDelilaca === num) {
                perfectNumber = skupDelilaca
            } else {
                return false;
            }
    return perfectNumber;
}
var broj = perfNumber(496); 

console.log(broj + ' perfektan !');

