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

console.clear();

// el.getAttribute( "ATTRIBUTE NAME" );
var img = document.querySelector("img");

var src = img.getAttribute("src");
console.log(src);

var alt = img.getAttribute("alt");
console.log(alt);

// Find the a tag, and log out the "href" attribute
var aTag = document.querySelector("a");
var href = aTag.getAttribute("href");
console.log(href);

// el.setAttribute( "ATTRIBUTE NAME", "DESIRED VALUE" );

var img = document.querySelector("img");
var currentSrc = img.getAttribute("src");
img.setAttribute("src", "https://placecage.com/400/400");

// Find the a tag
var aTag = document.querySelector("a");

// Change the href to https://google.com.sa
aTag.setAttribute("href", "https://google.com.sa");

// Log out the new href (using getAttribute)
var newHref = aTag.getAttribute("href");
console.log(newHref);

// Try setting the target attribute to be "_blank"
aTag.setAttribute("target", "_blank");

// .innerText

// Find the h1
var heading = document.querySelector("h1");

// Log out the current text of h1
console.log(heading.innerText);

// Change the h1's text to "Changed by JS"
heading.innerText = "Changed by JS";

// Append "!!!" to the h1
heading.innerText += "!!!";

// Select the a tag
var aTag = document.querySelector("a");

// Print out the a tag's current HTML
console.log(aTag.innerHTML);

// Change the HTML of the a tag to be "This is a <h1>link</h1>"
aTag.innerHTML = "This is a <h2>Link</h2>";

// Add some "!!!" at the end of the HTML too
aTag.innerHTML += "!!!";

// Bonus: Print out the ul's innerText and the ul's innerHTML
var unorderedList = document.querySelector("ul");
console.log(unorderedList.innerText);
console.log(unorderedList.innerHTML);

// input.value
var input = document.querySelector("input");
var currentValue = input.value;
console.log(currentValue);
input.value = "HELLO FROM JS";
// This is only for form-related data
// inputs, textareas, dropdowns, checkboxes

// Getting Styles

// 1. Select the DOM Node
var heading = document.querySelector("h1");

// 2. Ask for all of the current styles
var styles = getComputedStyle(heading);

// 3. Ask for properties
console.log(styles.color);
console.log(styles.fontSize); // font-size -> fontSize
console.log(styles.textDecoration); // text-decoration -> textDecoration

// Find the a tag
var aTag = document.querySelector("a");

// Get all of the current styles for the a tag
var aTagStyles = getComputedStyle(aTag);

// Log out the text color, display, font size, and text decoration of the a tag
console.log(aTagStyles.color);
console.log(aTagStyles.display);
console.log(aTagStyles.fontSize);
console.log(aTagStyles.textDecoration);

// Find the image
var image = document.querySelector("img");

// Log out the border, width, height and border-radius properties
var imageStyles = getComputedStyle(image);
console.log(imageStyles.border);
console.log(imageStyles.width);
console.log(imageStyles.height);
console.log(imageStyles.borderRadius);

console.clear();

var heading = document.querySelector("h1");
heading.style.color = "hotpink";
heading.style.background = "green";
heading.style.fontSize = "100px";

var image = document.querySelector("img");
image.style.width = "200px";
image.style.height = "400px";
image.style.border = "50px solid black";

console.clear();

var allListItems = document.querySelectorAll("li");
for (var i = 0; i < allListItems.length; i += 1) {
  var currentItem = allListItems[i];
  currentItem.innerHTML += "!!!";
  if (i % 2 === 0) {
    currentItem.style.color = "rebeccapurple";
  } else {
    currentItem.style.color = "lemonchiffon";
  }
}

var allParagraphs = document.querySelectorAll("p");
for (var i = 0; i < allParagraphs.length; i += 1) {
  var paragraph = allParagraphs[i];
  paragraph.innerHTML += Math.random();
  paragraph.style.border = "3px solid black";
}

console.clear();

// Creating Elements
// 1. Create the element and store it in a JS variable
// 2. Change it (using things like .innerText, .style)
// 3. Put it on the page

var newHeading = document.createElement("h1");

newHeading.innerText = "Created by JavaScript!";

var targetDiv = document.querySelector("div.dynamic");
targetDiv.appendChild(newHeading);

var newImg = document.createElement("img");

newImg.setAttribute("src", "https://fillmurray.com/300/300");
newImg.style.border = "4px solid red";

document.body.appendChild(newImg);

var tweet = "This is a tweet";
var author = "twitterUser42";

var content = tweet + ", posted by " + author;

var newParagraph = document.createElement("p");

newParagraph.innerText = content;
newParagraph.style.color = "blue";

var newTweetsDiv = document.querySelector(".newTweets");
newTweetsDiv.appendChild(newParagraph);

// Create a new "a" tag
var newLink = document.createElement("a");

// Set the text to "This is a link to Google"
newLink.innerText = "This is a link to Google";

// Set the font color to be "hotpink"
newLink.style.color = "hotpink";

// Set the "href" to be "https://google.com.sa"
newLink.setAttribute("href", "https://google.com.sa");

// Put it at the end of the body tag
document.body.appendChild(newLink);
