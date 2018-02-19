// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). 
// Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40
'use strict';
function compBMI(weight, height) {
    var bodyMassIndex = weight / (height * height);
    if (bodyMassIndex < 15) {
        console.log('Starvation');
    } else if (bodyMassIndex < 17.5) {
        console.log('Anorexic');
    } else if (bodyMassIndex <= 18.5) {
        console.log('Underweight');
    } else if (bodyMassIndex > 18.5 && bodyMassIndex < 25) {
        console.log('Ideal');
    } else if (bodyMassIndex > 25 && bodyMassIndex < 30) {
        console.log('Overweight');
    } else if (bodyMassIndex > 30 && bodyMassIndex < 40) {
        console.log('Obese');
    } else
        console.log('Morbidly obese');
    
    

    return bodyMassIndex;
}

console.log(compBMI(82, 1.85));


