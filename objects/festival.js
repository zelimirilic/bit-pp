'use strict';
(function () {
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var firstLetter = name.charAt(0);
            var lastLetter = name.charAt(name.length - 1);
            var final = firstLetter + lastLetter;
            return final.toUpperCase();

        }
    };


    function Movie(title, length, genre) {
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function () {
            return this.title + " " + this.length + " " + this.genre.getData();
        }
    };

    function Program(date,numOfMovies) {
        var listOfMovies = [];
        this.date =  new Date (date);
        this.numOfMovies = numOfMovies;
        this.addMovie = function () {
            this.listOfMovies.push(listOfMovies);
        };
        this.getData = function() {
            var output = '';
            for (var i=0; i<this.listOfMovies.length; i++) {
                var movie = this.movieList[i];
                otput += "|t" + movie.getData() + "\n";

            }
        }
     }

    function Festival(name) {
        this.name = name;
    }



    var genre1 = new Genre("Drama");

    var movie1 = new Movie("The Shanwshank Redemption", 130, genre1);

    console.log(movie1.getData());



})();