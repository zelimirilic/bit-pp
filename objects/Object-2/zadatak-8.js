// Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days
'use strict';
function calculateRodjosh(danas, birthday) {
    // Danasnji dan i mesec
    var date = new Date(danas);
    var month = date.getMonth();
    var danas = danas.split(' ')
    danas[0];
    console.log(danas);


    // Dan rodjenja i mesec
    var dateTwo = new Date(danas);
    var monthTwo = date.getMonth();
    var dayTwo = birthday.split(' ')
    dayTwo[0];
    console.log(dayTwo);

    return (dayTwo[0] - danas[0]) + ' days'



}


console.log(calculateRodjosh('01 March', '05 October'));