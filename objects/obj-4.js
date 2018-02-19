// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// 	"Republic of Serbia" -> "Rbbceilu fO Sabeir"


function alpha(rec) {
    var str = rec.split(" ");
    var newArr = [];
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var x = str[i].toLowerCase();
        newArr = x.split("").sort().join("");
       result += newArr;
       result += " ";
        
    }
    return result;

}

console.log(alpha("Republic of Serbia"));