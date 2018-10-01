console.log("Hello World");

var num = 5;

if (num === 2) {
  console.log("Good choice!");
}

var legalDrivingAge = 18;
var usersAge = 84;

// If the user is over the legalDrivingAge
// Print out "You can drive"

if (usersAge >= legalDrivingAge) {
  console.log("You can drive");
} else {
  console.log("You can't drive yet");
}

// Store the favBook and set that to "GEB"
// If favBook is "GEB"
// Say good choice
// Else
// Say I'm sure that's a good book too

var favBook = "GEB";

if (favBook === "GEB") {
  console.log("Good choice!");
} else {
  console.log("I'm sure that's a good book too");
}

var vehicle = "Motorbike";

if (vehicle === "Dune buggy") {
  console.log("Oooh, this will be fun");
} else if (vehicle === "Car") {
  console.log("You're in a car");
} else if (vehicle === "Motorbike") {
  console.log("You are riding");
} else {
  console.log("We aren't sure what you are driving");
}

// Create a variable called message
// Test data, "Hello!", "How are you?", "Bye"
// If message ends with an "!"
// Print "You are excited"
// Else if message ends with a "?"
// Print "You are asking me a question"
// Else
// Print "Yeah, okay"

var message = "How are you?";

if (message.endsWith("!")) {
  console.log("You are excited!");
} else if (message.endsWith("?")) {
  console.log("You are asking me a question");
} else if (message.startsWith("H")) {
  console.log("It started with H");
} else {
  console.log("Yeah, okay");
}

// Create an if statement that tells us whether a number is even or odd

var num = 5;

if (num % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}
