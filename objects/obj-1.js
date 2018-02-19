// Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

// 'ff', 16, 8 -> 377





function convert (input, num1, num2) {
    if (typeof(input) === "number") {
        return parseInt(String(input)).toString(num2);
    } else {
        return parseInt(input.toString(), num1).toString(num2);
    };
};
console.log(convert("c", 16, 8));


