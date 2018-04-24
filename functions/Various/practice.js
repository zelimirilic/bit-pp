
let arr = [10, 300, 50, 40];

let average = numbers => {
    let sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};
console.log(average(arr));