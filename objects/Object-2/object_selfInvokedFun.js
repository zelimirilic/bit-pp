// self invoked function which return self invoked function


var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    write: (function () {
        return (function () {
            console.log("Writing....");
        })()
    })()
};

author.write;
