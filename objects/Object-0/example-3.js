//  Here's an example of how you can assign an object to another functions and then make a change to the copy. 



var original = { koliko: 100 };
var copy = function (izmena) { izmena.koliko = 50; };
copy(original);


console.log(original.koliko);

