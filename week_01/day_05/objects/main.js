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

console.clear();

var explorer = {
  name: {
    first: "Jacques",
    last: "Cousteau"
  },
  birth: {
    day: 11,
    month: 6,
    year: 1910
  }
};
// Use the explorer object to log out:
//    "Jacques was born on 11/6/1910";

var firstName = explorer.name.first;
var fullName = firstName + " " + explorer.name.last;

var description =
  firstName +
  " was born on " +
  explorer.birth.day +
  "/" +
  explorer.birth.month +
  "/" +
  explorer.birth.year;

console.log(description);

// Should look like "Jacques Cousteau" when console.logged. Use the explorer object!

var todaysClass = {
  weekNumber: 1,
  dayNumber: 5,
  topics: ["Objects", "Scope", "Hoisting", "Callbacks"]
};

var classDetails =
  "Week " +
  todaysClass.weekNumber +
  ", Day " +
  todaysClass.dayNumber +
  " topics:";

console.log(classDetails);

for (var i = 0; i < todaysClass.topics.length; i += 1) {
  var currentTopic = todaysClass.topics[i];
  console.log(currentTopic);
}

// Add this information to the todaysClass object!
//
// weekNumber = 1
// dayNumber  = 5
// topics = [ "Objects", "Scope", "Hoisting", "Callbacks" ]

console.clear();

var tweets = [
  { username: "threequal", message: "Something something nerdy" },
  { username: "meshoalmosallam", message: "I have 0 tweets" }
];

for (var i = 0; i < tweets.length; i += 1) {
  var currentTweet = tweets[i];
  var username = currentTweet.username;
  var message = currentTweet.message;
  var tweet = username + " posted: " + message;
  console.log(tweet);
}
