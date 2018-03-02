// Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days
'use strict';
function calculateBirthdday(today, birthday) {
    // Danasnji dan i mesec
    var date = new Date(today);
    var month = date.getMonth();
    var today = today.split(' ')
    today[0];
    console.log(today);


    // Dan rodjenja i mesec
    var date2 = new Date(today);
    var monthB = date.getMonth();
    var day2 = birthday.split(' ')
    day2[0];
    console.log(day2);

    return (day2[0] - today[0]) + ' days'



}


console.log(calculateBirthdday('20 February', '28 February'));