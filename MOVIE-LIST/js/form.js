var movieList = [];

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}
Movie.prototype.getData = function () {
    return this.title + ', ' + this.length + ' ,' + this.genre + ' min';
}

function createMovie() {
    var title = document.querySelector('#movie-title').value;
    var length = document.querySelector('#movie-length').value;
    var genres = document.getElementById('genre-select');
    var genre = genres.options[genres.selectedIndex].value;
    return new Movie(title, length, genre);
}


function appendMovieToContainer(movie) {
    var container = document.querySelector(".container");
    var movieToAppend = document.createElement("p");
    movieToAppend.textContent = movie.getData();
    container.appendChild(movieToAppend);
}

document.querySelector('.create-movie').addEventListener('click', function (event) {
    var movie = createMovie();
    movieList.push(movie);
    appendMovieToContainer(movie);
    console.log(movieList);
})