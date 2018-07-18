function protectEmail(input) {

    var emailindex = input.indexOf("@");
    console.log(emailindex);                // control of code execution
    var arr = input.slice(4, emailindex);
    console.log(arr);                       // control of code execution
    var str = input.replace(arr, "....");
    console.log(str);                       // control of code execution
    
    return str;
    }
console.log(protectEmail("zelimir.ilic@gmail.com"));