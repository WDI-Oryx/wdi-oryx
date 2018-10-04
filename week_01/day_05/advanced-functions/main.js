function sayHi() {
  console.log("Say Hi");
}
sayHi();

function sayHello(name) {
  var greeting = "Hello " + name;
  console.log(greeting);
}
sayHello("Rawan");

function divide(x, y) {
  var result = x / y;
  console.log(result);
}
divide(8, 2);
divide(16, 5);

var user = {
  firstName: "Jacques",
  lastName: "Cousteau"
};
var userTwo = {
  firstName: "Ali",
  lastName: "Alqahtani"
};

function displayFullName(person) {
  var fullName = person.firstName + " " + person.lastName;
  console.log(fullName);
}
displayFullName(user);
displayFullName({ firstName: "Roger", lastName: "Something" });

console.clear();

function delayedLog() {
  console.log("Hello, I was delayed");
}

// delayedLog();

// callback function, time in ms
// setTimeout(delayedLog, 5000); // DELAY

function regularlyCalled() {
  console.log("Look at me go!");
}

// Callback function, time in milliseconds
// setInterval(regularlyCalled, 200); // REGULARLY CALLED

function handleCallback(cb) {
  cb();
}

function log() {
  console.log("Hello");
}

handleCallback(log);

function repeat(times, myCallback) {
  for (var i = 1; i <= times; i += 1) {
    myCallback();
  }
}

function animateImage() {
  console.log("I am animating an image");
}

repeat(5, animateImage);

function annoyUser() {
  alert("HAHAHAHAHAHA");
}

repeat(2, annoyUser);
