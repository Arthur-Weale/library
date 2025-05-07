



//Library 

// const myLibrary = [];

// function Book(title , author, pages, reading){
//     this.title = title;
//     this.author = author;
//     this.page = pages;
//     this.reading = reading;
// }

// function addBookToLibrary(){
//     if(this.reading){
//         console.log(`The book is ${this.title} by ${this.author} and has ${this.page} pages and is read.`)
//     }
//     else{
//         console.log(`The book is ${this.title} by ${this.author} and has ${this.page} pages and is not read.`)
//     }
// }

// const book = new Book("The Me", "Art Miz", 390, true);
// book.addBookToLibrary();

//MINI MOVIE CHALLENGE : MOVIE MANAGER

const myMovies = []; //Initialises an array to store movies later.

function Movie(title, director , year , watched){ //Constructor functions creates object template .It is the factory think of it as printing and casing movies.
    this.id= crypto.randomUUID(); //this is keyword use to refference an instance.
    this.title = title;
    this.director = director;
    this.year = year;
    this.watched = watched;
}

function addMovieToLibrary(title , director, year , watched){ //Commands the factory (constructor) , its like the manager. It also calls and passes data to the constructor (think of it as telling the constructor what to do), the contructor will reply back with an object creation.
    const movie = new Movie(title, director, year, watched)  //Initialises an instance or object.
    myMovies.push(movie); //Pushes each movie object to the array initialised earlier.
}

//CALLS
addMovieToLibrary("The Great Gatsby", "Baz Luhrmann", "2013", true);
addMovieToLibrary("The Matrix", "Lana Wachowski", "1999", true);
addMovieToLibrary("Fast X Part 2", "Louis Leterrier", "2026", false);

//Prints array 
console.log(myMovies);
//Prints each  movie object
myMovies.forEach(movie => {
    console.log(movie);
})