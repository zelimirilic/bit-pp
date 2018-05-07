// Import some sign or string ('*') into string object.
// join() method in example


var objStr = new String('tekst neki');
console.log(objStr);
console.log(typeof objStr);

function putStar(objStr) { 
var newStr = '';
for(var i=0; i<objStr.length;i++) {
newStr += objStr[i] + '*';
}
return newStr;
}
console.log(putStar(objStr));