// typeof from '23' is string !!!
// 23 == '23' is true 


let f = function (a) {
    return typeof a == 'number' && a > 12;
}

console.log(f('23'));

console.log(typeof '23');

