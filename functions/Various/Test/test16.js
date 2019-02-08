// arrow test


var f3 = (x,y) => {
	var z = x * 2 + y;
	y++;
	x *= 3;
	return (x + y + z) / 2;
};

console.log(f3(2,3));

var fibonacciNumbers = [0,1,1,2,3,5,8,13,21,34,55];

var previous = fibonacciNumbers[fibonacciNumbers.length - 1];
console.log(previous)
var previous2 = fibonacciNumbers[fibonacciNumbers.length - 2];
console.log(previous2)

fibonacciNumbersAdd = previous + previous2;

function fib() { 
for(var item=0; item<fibonacciNumbers.length; item++) { 
    console.log(fibonacciNumbers[item]);
}
return fibonacciNumbers;
}

console.log(fibonacciNumbersAdd);
var result = fib();
console.log(result);

