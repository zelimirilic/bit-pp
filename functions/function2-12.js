function check (year, pol) {
    var yearsLeft = 0;
    var age = 2018 - year;

    if (pol === "m" || pol === "M") {
        if (age < 65 && age > 0) {
            yearsLeft = 65 - age;
        } else {
            console.log("You are retired already");
        }
    }
    if (pol === "f" || pol === "F") {
        if (age < 60 && age > 0) {
            yearsLeft = 60 - age;
        } else {
            console.log("You are retired already");
        }
    }

    return  yearsLeft;
}

console.log(check(1972, "f"));
