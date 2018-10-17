// Set or Add Items

// localStorage.setItem("clickCount", 10);

// Get Items out of Local Storage

// var numClicks = localStorage.getItem("clickCount");
// console.log(parseInt(numClicks) + 1);

// Remove Items

// localStorage.removeItem("clickCount");
// localStorage.clear();

// CLICK COUNTING APP

// If there is nothing in localStorage called clickCount, set it to 0

var currentClickCount = localStorage.getItem("clicks");

if (currentClickCount === null) {
  localStorage.setItem("clicks", 0);
}

document.querySelector(".count").innerHTML = currentClickCount;

var button = document.querySelector("button");
button.addEventListener("click", function() {
  // Get the current number of clicks out of lS
  var current = localStorage.getItem("clicks");
  // Turn it into a number
  current = parseInt(current);
  // Add one to it
  var newValue = current + 1;
  // Update localStorage
  localStorage.setItem("clicks", newValue);
  document.querySelector(".count").innerHTML = newValue;
});

var xWins = localStorage.getItem("xWins");
if (xWins === null) {
  localStorage.setItem("xWins", 0);
}

document.querySelector(".x").addEventListener("click", function() {
  var currentVal = parseInt(localStorage.getItem("xWins"));
  localStorage.setItem("xWins", currentVal + 1);
  console.log(currentVal);
});

var currentGame = localStorage.getItem("game");
if (currentGame === null) {
  var game = {
    xWins: 0,
    oWins: 0,
    draws: 0
  };
  localStorage.setItem("game", JSON.stringify(game));
}

var game = JSON.parse(localStorage.getItem("game"));

game.xWins += 1;

localStorage.setItem("game", JSON.stringify(game));
