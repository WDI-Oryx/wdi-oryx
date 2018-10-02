// Creating a Function

// Function Declaration
// This is Hoisted
// Meaning it rises up to the top of the scope!

function doSomething() {
  console.log("Hello");
}

doSomething(); // Call-site

// Function Expression

var doSomethingElse = function() {
  console.log("Hello World");
};

doSomethingElse(); // Call-site (Executed)

function squareFive() {
  console.log(5 * 5);
}
squareFive();

function rollDice() {
  var randomNumber = Math.random() * 6;
  var roundedNumber = Math.floor(randomNumber) + 1;
  console.log(roundedNumber);
}

rollDice();

function hiMoath() {
  console.log("Hi Moath");
}

hiMoath();

// Parameters || Arguments
// You give names to provided data

function sayHello(name) {
  var message = "Hello " + name; // Concatenation
  console.log(message);
}

sayHello("Thekra");
sayHello("Sami");

function add(numOne, numTwo) {
  var result = numOne + numTwo;
  console.log(result);
}

add(50, 6);
add(50);

console.clear();

function power(base, exponent) {
  var result = Math.pow(base, exponent);
  console.log(result);
}

power(5, 2);
power(5, 3);

// Greeting - Actual Greeting, Name
//
// "Hello", "Jane" => "Hello, Jane!"
// "Howdy", "Moath" => "Howdy, Moath!"

function greet(greeting, name) {
  var msg = greeting + ", " + name + "!";
  console.log(msg);
}

greet("Hello", "Jane");
greet("As-salamu Alaykum", "Saud");

console.clear();

function changeTheme(themeChoice) {
  if (themeChoice === "Light") {
    console.log("Background Light");
  } else {
    console.log("Background Dark");
  }
}

changeTheme("Dark");

function handleMenu(isMenuOpen) {
  if (isMenuOpen) {
    console.log("Menu should close");
  } else {
    console.log("Menu should open");
  }
}

handleMenu(true);
handleMenu(false);

// Return Values
// Means that the function has a result
// It's the output

function square(number) {
  var result = number * number;
  return result;
}

var result = square(5) + square(4);
// var result = square(5) + 16;
// var result = 25 + 16;
// var result = 41;

console.log(result);

var fourSquared = square(4);
console.log("The square of four is " + fourSquared);

function area(width, height) {
  var result = width * height;
  return result;
}

var res = "The area of a 4x7 rectangle is " + area(4, 7);
console.log(res);
console.clear();

// Predicate functions only return booleans!
function login(username, password) {
  if (username === "trevor" && password === "chicken") {
    return true;
  } else if (username === "moath" && password === "bigchicken") {
    return true;
  } else {
    return false;
  }
}

// // Use prompts to get username and password
// var username = prompt("What is your username?");
// var pw = prompt("Enter your password?");

// var isLoggedIn = login(username, pw);

// if (isLoggedIn) {
//   alert("Success! You are logged in");
// } else {
//   alert("Sorry, something went wrong");
// }

// trevor and chicken
// moath and bigchicken
// saud and tomato

// From Email Account = aliah@ga.co
// Message = Hello, how are you
var fromEmailAccount = "aliah@ga.co";
var message = "Hello, how are you?";

function isValidEmail(address) {
  var isValid = address.includes("@");
  return isValid;
}

var validEmail = isValidEmail(fromEmailAccount);

if (validEmail) {
  console.log("The message has been sent");
} else {
  console.log("Enter a valid email address");
}

// isValidEmail function (receives an email)
// IF email contains "@"
// Return true
// Else
// Return false

// IF isValidEmail
// Console.log "The message has been sent"
// Console.log Message
// ELSE
// Log out "Put in a valid email address"

console.clear();

function sayHi() {
  return "No.";
  console.log("Hello");
}

sayHi();
