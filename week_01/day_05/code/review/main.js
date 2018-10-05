// Creation
// Use Array Literals
// Inherit properties and methods

var emptyArray = [];
var letters = ["a", "b", "c", "d", "e"];

// Accessing Elements

var firstLetter = letters[0];
var letterE = letters[4];

console.log(firstLetter);
console.table(letters);

// Reassigning Elements

letters[0] = "A";
letters[3] = "D";

// Common Methods

// Adding to the end...
letters.push("f");
letters.push(false);

// Remove from the end...
letters.pop();

// Adding to the start
letters.unshift("TO BE REMOVED");

// Removing from the start
letters.shift();

console.table(letters);

console.clear();

// Loops
// Starting Point, Ending Condition, Step

for (var metres = 0; metres <= 10; metres += 1) {
  console.log(metres);
}

console.clear();

var classes = ["objects", "scope", "hoisting", "functions"];

for (var i = 0; i < classes.length; i += 1) {
  var currentClass = classes[i];
  console.log(currentClass);
}

var instruments = ["Guitar", "Piano", "Violin", "Drums", "Cello"];

// Starting Point: 0
// Ending Point: The end of the array
// Step: 1

for (var index = 0; index < instruments.length; index += 2) {
  var currentInstrument = instruments[index];
  console.log(currentInstrument);
}
