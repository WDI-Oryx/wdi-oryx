var lang = "Python";

if (lang === "HTML" || lang === "CSS" || lang === "JS") {
  console.log("It's front-end!");
} else {
  console.log("It's probably back-end");
}

// IF lang is "HTML" OR lang is "CSS"
// It's front-end!

// IF you have the correct password OR if you are hacker
// You got into their account
// Otherwise
// Sorry

var hasCorrectPassword = true;
var isHacker = true;

if (hasCorrectPassword || isHacker) {
  console.log("You got into the account!");
}

var fruit = "LIME";

fruit = fruit.toLowerCase();

if (
  fruit === "orange" ||
  fruit === "lemon" ||
  fruit === "grapefruit" ||
  fruit === "lime"
) {
  console.log("That is citrus");
} else {
  console.log("That's a shame");
}
// If fruit is Orange, Lemon, Grapefruit or Lime
// Log out "That is citrus"
// Else
// Log out "That's a shame"

// BONUS: Make it case insensitive!

// AND Logical Operator (&&)
// Both sides must be true!

var usernameExists = true;
var hasAppropriatePassword = true;

if (usernameExists && hasAppropriatePassword) {
  console.log("You are logged in");
} else {
  console.log("You are not logged in");
}

// IF the username exists AND the password is appropriate
//   Log the user in
// OTHERWISE
//   Not logged in

// userClickedBuy
// userHasMoneyInAccount
// IF both of those things
// Print You just purchased an item
// ELSE
// Sorry, something went wrong

var userClickedBuy = false;
var userHasMoneyInAccount = true;

if (userClickedBuy && userHasMoneyInAccount) {
  console.log("You just purchased an item");
} else {
  console.log("Sorry, something went wrong");
}

// NOT or Negation Operator (!)

var emailExists = false;

if (!emailExists) {
  console.log("You can create an account");
} else {
  console.log("You already have an account");
}

// IF the email doesn't exist
// Log you can create an account
// Else
// You already have an account
