function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}

Movie.prototype.getData = function () {
    var firstLetter = this.genre[0];
    var lastLetter = this.genre[this.genre.length - 1];
    var acronymGenre = (firstLetter + lastLetter).toUpperCase();
    return this.title + ", " + acronymGenre + ", " + this.length + " min ."
}
document.querySelector("#create-movie").addEventListener("click", function (event) {
    createMovie();

});
////////////////////////////////////////////////////////////////////////////////////////////////////////


function createMovie() {

    var title = document.querySelector("#movie-title").value;
    var genre = document.querySelector("#movie-genre").value; ///setovali smo id na select u html-u i preko njega vezali value
    var length = document.querySelector("#movie-length").value;

    console.log(title);

    var movie = new Movie(title, genre, length)


    console.log(movie.getData());
    // document.querySelector("#result").innerHTML += "<li>" + movie.getData() + "</li>"; ///ovo radi!!!

    var newProgram = document.createElement("li");
    var programData = document.createTextNode(movie.getData());
    newProgram.appendChild(programData);
    var movieList = document.querySelector("#result");
    movieList.appendChild(newProgram);

}

//////////////////////////////////////////////////////////////////////////////////////////////


document.querySelector("#create-program").addEventListener("click", function (event) { //na klik se kreira novi program festivala
    createProgram();

});

function Program(date) {
    // properties
    this.date = date;
    this.listOfMovies = [];
}
// methods
Program.prototype.getProgramDuration = function () {
    var programLength = 0;

    // Alternative way to loop arrays
    this.listOfMovies.forEach(function (movie) {
        programLength += movie.length;
    }, this);

    return programLength;
};

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
};

Program.prototype.getData = function () {
    var date = this.date;
    var movies = this.listOfMovies;
    var programDuration = this.getProgramDuration();
    var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    var outputStr = dateStr + ", program duration " + programDuration + "min\n";

    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        outputStr += "\t\t" + movie.getData() + "\n";
    }

    return outputStr;
};




function createProgram() {
    var date = document.querySelector("#program-date").value; //// ovo je vrednost iz date inputa
    var program = new Program(date);
    var newProgram = document.createElement("li");
    var programData = document.createTextNode(program.getData());
    newProgram.appendChild(programData);
    var movieList = document.querySelector("#programFestivala");
    movieList.appendChild(newProgram);

}