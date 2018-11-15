// let
//
// Can be re-assigned
// Block-scoped
// Can't be talked about before they are defined (temporal dead zone)

let password = "chicken";
password = "chicken2";

let passwordConfirmation = "chicken";
passwordConfirmation = "chicken2";

// const
//
// Block-scoped
// Temporal Dead Zone
// It has an immutable binding

const favNumber = 42;
// favNumber = 10;

const nums = [1, 2, 3];
nums.push(4); // Okay, because it's an immutable binding

// Arrow Functions

// function add(x, y) {
//   return x + y;
// }

// const add = (x, y) => {
//   return x + y;
// };

const add = (x, y) => x + y; // Implicit Returns

const res = add(4, 5);
console.log(res);

// Create a function called fullName
// fullName receives two parameters, first and last and returns the full name
//
// 1. Use the function keyword
// 2. Rewrite using an arrow function
// 3. Rewrite and use implicit return

// function fullName(first, last) {
//   return first + " " + last;
// }
//
// const fullName = (first, last) => {
//   return first + " " + last;
// };

const fullName = (f, l) => `${f} ${l}`;

// Turn sayHello into an arrow function

// function sayHello(name = "World") {
//   console.log("Hello " + name);
// }

// Make sayHello use backticks instead (interpolation)
// Do the same thing, for fullName

const sayHello = (name = "world") => {
  const msg = `Hello ${name}`;
  console.log(msg);
};

sayHello("Roger");
sayHello();

// Template Strings
//
// Created with the ``
// You can use interpolation with them

const brand = "Wurlitzer";
const keys = 64;
const message = `My ${brand} keyboard has ${keys} keys`;

console.log(message);

// Array Destructuring

const actor = ["Groucho", "Marx", "Duck Soup"];
const firstName = actor[0];
const lastName = actor[1];

const [first, last, movie] = actor;
console.log(firstName, first);
console.log(lastName, last);

// Object Destructuring

const book = {
  author: "Douglas Hofstadter",
  title: "GEB"
};

const t = book.title;
const a = book.author;

const { title, author } = book;

console.log(title, author);
