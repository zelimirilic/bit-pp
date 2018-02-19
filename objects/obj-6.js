// Write a function to convert a string to its abbreviated form. 

// "John Snow" -> 	"John S."
function conver(str) {
var arr = str.split(" ");
  var x = arr[1].slice(0,1);
   return arr[0] + " " + x + "." ;

}
console.log(conver("John Snow"));