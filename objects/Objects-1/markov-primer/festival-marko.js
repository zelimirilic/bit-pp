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
            return this.title + ", " + this.length + "min, " + this.genre.getData();
        }
    };

    function Program(date) {
        this.date =  new Date (date);
        this.movieList = [];
        this.numOfMovies = numOfMovies;
        this.addMovie = function (movie) {
            this.listOfMovies.push(listOfMovies);
        };
        this.getNumOfMovies = function() {
            var length = 0;
            for (var i=0; i<this.movieList.length; i++) {
                var movie = this.movieList[i];
                length += movie.length;

            }
            return length;
        }
        this.getData = function() {
            var output = '';

            var myDate = this.date.getFullYear();
            // 28.10.2017., program duration 368 min
            output += myDate + ', program duration ' + this.getProgramLength() + 'min\n';
            for (var i = 0; i < this.movieList.length; i++) {
                var movie = this.movieList[i];
                output += '\t' + movie.getData() + '\n';
            }
            return output;
        }
     }

    var action = new Genre('Action');
    var m1 = new Movie ('Supermen', action, 123);
    var m2 = new Movie ('Matman', new Genre('Drama'), 123);

    var program1 = new Program('2006');
    program1.addMovie(m1);
    program1.addMovie(m2);
    console.log(program1.movieList);
    console.log(program1.getNumOfMovies());
    
     console.log(program1.getData());

})();