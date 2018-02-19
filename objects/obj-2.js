 // Write a JavaScript function that reverses a number.

 // 	12345 -> 12345

 function rev(str) {
     var finalStr = str.toString();
     return finalStr.split("").reverse().join("");
 }
 console.log(rev(1234));