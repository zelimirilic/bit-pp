const sumOfmovieLength = 0;
const movieCounter = 0;
const movieList = [];
const dateInput = document.querySelector("#program-date").value;
const programCounter = 0;
const programList = [];

const dateButton = document.querySelector("#submitNewProgram");
dateButton.addEventListener("click", function (event) {
    createProgram();
})

const submit = document.querySelector("#submitNewMovie");
submit.addEventListener("click", function (event) {
    createMovie();
});



class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = parseInt(length);
        this.genre = genre;
    }
    getData() {
        return (`${this.title}|${this.length}|${this.genre}`)
    }
    makeAbr() {
        let firstLetter = this.genre[0];
        let lastLetter = this.genre[this.genre.length - 1];
        return (firstLetter + lastLetter).toUpperCase();
    }
}

class Program {
    constructor(date) {
        this.date = new Date(date);
        this.movieList = [];
        this.movieProgramList = [];
    }
    addMovie() {
        return this.movieProgramList.push(movie);
    }
    getData() {
        return 'zzzz'
    }
}

const createMovie = () => {
    const title = document.querySelector("#movie-title").value;
    const length = document.querySelector("#movie-length").value;
    const genre = document.querySelector("#genre-select").value;

    const movie = new Movie(title, length, genre);

    movieList.push(movie);
    
    createNewElement(movie);
    getMovieLength(movieList);
    console.log(movie.getData());
    totalTime(getMovieLength(movieList));
    addMovieToDropdown(movie);
    movieCounter++;
    return true;
}

const addMovieToDropdown = movie => {
    const movieMenu = document.querySelector("#movie-select");
    const option = document.createElement("option");
    option.textContent = movie.getData();
    option.value = movieCounter;
    movieMenu.appendChild(option);
    return true;
}
const createNewElement = movie => {
    const newMovieContainer = document.querySelector(".newMovieContainer");
    const p = document.createElement("p");
    movie = movieList[movieList.length - 1];
    p.textContent = movie.getData();
    newMovieContainer.appendChild(p);
    return true;
}
const getMovieLength = movieList => {
        const sumOfmovieLength = 0;

     let forEach=movie =>{
        sumOfmovieLength = sumOfmovieLength + movie.length;
     }
    }
    let totalTime= sumOfmovieLength=>{
        const spanLength = document.querySelector(".totalTime");
        spanLength.textContent = sumOfmovieLength;
    
    }
    //  }   movieList.forEach(function (movie) {
    //             sumOfmovieLength = sumOfmovieLength + movie.length;
    //         }
    //     }

        const createProgram = () => {
            const program = new Program(dateInput);
            programList.push(program);
            addProgramToDropdown(program);
            programCounter++;
            return program;
        }

        const addProgramToDropdown = program => {
            const programMenu = document.querySelector("#program-select");
            const option = document.createElement("option");
            option.textContent = program.getData();
            option.value = programCounter;
            programMenu.appendChild(option);
            return true;

        }


        const createMovieProgram = (movieList, programList) => {
            const programOption = document.querySelector("#program-select")
            const movieOption = document.querySelector("#movie-select")
            const movie = movieList[movieOption.value];
            const program = programList[programOption.value]
            program.addMovie(movie);
            return true;

        }