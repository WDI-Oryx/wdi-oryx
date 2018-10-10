// The type of event
var eventType = "click";

// The target of the event
var myButton = document.querySelector("button");

// The callback - what do you want to do as a response?
function myCallback(event) {
  console.log("The button was clicked", event);
}

// Create an event listener
// WHEN this EVENT takes place on this TARGET, call this CALLBACK FUNCTION
myButton.addEventListener(eventType, myCallback);

// Events need:
// - An event type
// - An event target
// - A callback function
// When all of those things are combined, they become an event listener

var darkButton = document.querySelector("#dark");

function changeToDarkTheme() {
  document.body.style.background = "black";
  document.body.style.color = "white";
}

darkButton.addEventListener("click", changeToDarkTheme);

var lightButton = document.querySelector("h2#light");

function lightTheme() {
  document.body.style.background = "white";
  document.body.style.color = "black";
}

lightButton.addEventListener("click", lightTheme);

// When the h2#light is clicked
//  Change the page's background to be white
//  Change the text color to be black

var postTweetButton = document.querySelector(".post");

function createTweet() {
  // Get whatever is typed in the input and save it in a variable called content
  var input = document.querySelector("input");
  var content = input.value;
  // Create a new paragraph
  var newPara = document.createElement("p");
  // Set the paragraph's text to be content
  newPara.innerText = content;
  // Take that paragraph and put it at the end of div.newTweets
  var newTweetsDiv = document.querySelector(".newTweets");
  newTweetsDiv.appendChild(newPara);
}

postTweetButton.addEventListener("click", createTweet);

var colorInput = document.querySelector("input.color");

function onColorChange() {
  document.body.style.background = colorInput.value;
}

colorInput.addEventListener("change", onColorChange);

var clickCount = 0;
var clickCounterButton = document.querySelector("button.click");

function onClick() {
  // Increment clickCount (add 1)
  clickCount += 1;
  // Find div.clickCount and store it as targetDiv
  var targetDiv = document.querySelector("div.clickCount");
  // Change the text of targetDiv to whatever clickCount is
  targetDiv.innerText = clickCount;
}

clickCounterButton.addEventListener("click", onClick);

var billImage = document.querySelector(".bill");

function doubleImageSize() {
  this.style.width = "600px";
}

// When I "click" Bill, call doubleBillImageSize
billImage.addEventListener("click", doubleImageSize);

// Make the same thing work for the image of Nick Cage
var nickImage = document.querySelector(".nick");
nickImage.addEventListener("click", doubleImageSize);

function onMouseMove(event) {
  var xCoordinate = event.clientX;
  var yCoordinate = event.clientY;

  var xDiv = document.querySelector(".x");
  xDiv.innerText = xCoordinate;

  var yDiv = document.querySelector(".y");
  yDiv.innerText = yCoordinate;
}

// `window` refers to the whole browser window (the page)
window.addEventListener("mousemove", onMouseMove);

function onResize() {
  var width = window.innerWidth;
  console.log("The width of the browser is " + width);
}

window.addEventListener("resize", onResize);

function whenAKeyIsPressed(e) {
  var keyPressed = e.key;
  console.log("You typed " + keyPressed);
}

window.addEventListener("keypress", whenAKeyIsPressed);

function makeTextRed() {
  console.log(this);
  this.style.color = "red";
  // console.log("Make text red was called");
}

var firstItem = document.querySelector(".one");
firstItem.addEventListener("click", makeTextRed);

var secondItem = document.querySelector(".two");
secondItem.addEventListener("click", makeTextRed);
