function protectEmail(input) {

    var emailindex = input.indexOf("@");
    var arr = input.slice(4, emailindex);
    var str = input.replace(arr, "....");
    
    
    return str;
    }
console.log(protectEmail("zelimir.ilic@gmail.com"));