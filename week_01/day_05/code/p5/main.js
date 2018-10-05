function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
}

function draw() {
  if (mouseIsPressed) {
    fill(0, 0, 0);
  } else {
    fill(random(255), random(255), random(255));
  }

  if (random() < 0.5) {
    ellipse(mouseX, mouseY, random(20, 80), random(20, 80)); // x, y, width, height
  } else {
    rect(mouseX, mouseY, 50, 50);
  }
}

// function draw() {
//   var red = Math.random() * 255;
//   var green = Math.random() * 255;
//   var blue = Math.random() * 255;

//   stroke(red, green, blue); // Changes the line color
//   line(0, 0, mouseX, mouseY);
// }
