// Objects
// Unordered
// Data is accessed with a key

// Creating Objects
var emptyObj = {};

var movie = {
  title: "Satantango",
  director: "Bela Tarr",
  duration: 432
};

var bookSeries = {
  name: "In Search of Lost Time",
  author: "Marcel Proust",
  books: [
    "Swann's Way",
    "In the Shadow of Young Girls in Flower",
    "The Guermantes Way",
    "Sodom and Gomorrah",
    "The Prisoner",
    "The Fugitive",
    "Time Regained"
  ]
};

// Accessing Values

var movie = {
  title: "Satantango",
  director: "Bela Tarr",
  duration: 432
};

var movieTitle = movie.title;
var director = movie.director;
var duration = movie.duration;

var moath = {
  name: "Moath",
  hometown: "Dammam",
  role: "Great Teacher"
};

var name = moath["name"];
var town = moath["hometown"];
var desiredKey = "role";
var role = moath[desiredKey];
console.log(role);

console.clear();

// Changing Values (Re-Assigning)

var movie = {
  title: "Satantango",
  director: "Bela Tarr",
  duration: 432
};

movie.duration = 534;

// Add new values

movie.language = "Hungarian";
movie.rating = 1924127849821748921;

// If there is no value, we get undefined

console.log(movie.actors);

// Methods
// Functions stored in objects

var person = {
  firstName: "Jacques",
  lastName: "Cousteau",
  sayHi: function() {
    console.log("Hello World");
  }
};

person.sayHi();

var math = {
  pi: 3.14,
  add: function(numOne, numTwo) {
    var result = numOne + numTwo;
    return result;
  },
  multiply: function(x, y) {
    var result = x * y;
    return result;
  }
};

// Create a multiply method!
math.multiply(2, 3) + 5;
