// Select the h1
var heading = document.querySelector("h1");
console.log(heading);

// Select the paragraph
var paragraph = document.querySelector("p");
console.log(paragraph);

// Select the img with a class selector
var image = document.querySelector(".bill");
console.log(image);

var firstListItem = document.querySelector("li");
var secondListItem = document.querySelector("li#second");

// document.querySelectorAll("CSS Selector")

var allListItems = document.querySelectorAll("li");
console.log(allListItems); // => NodeList

var allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);
