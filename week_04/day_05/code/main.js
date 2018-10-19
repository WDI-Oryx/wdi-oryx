var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

function randomColor() {
  var red = Math.random() * 255;
  var green = Math.random() * 255;
  var blue = Math.random() * 255;
  var alpha = Math.random();
  var color = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
  return color;
}

function drawRectangle(x, y, width, height, color) {
  context.fillStyle = color;
  context.beginPath();
  context.fillRect(x - width / 2, y - height / 2, width, height); // x, y, width, height
  context.closePath();
}

var particleCount = 42 * 3;
var particles = [];
for (var i = 1; i <= particleCount; i += 1) {
  var particle = {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    color: randomColor(),
    size: Math.random() * 10,
    deltaX: Math.random() * 2 - 1,
    deltaY: Math.random() * 2 - 1
  };
  particles.push(particle);
}

function distance(x1, y1, x2, y2) {
  var xDistance = Math.pow(x2 - x1, 2);
  var yDistance = Math.pow(y2 - y1, 2);
  var distance = Math.sqrt(xDistance + yDistance);
  return distance;
}

function drawNeighbourLines(p) {
  for (var i = 0; i < particles.length; i += 1) {
    var currentParticle = particles[i];
    var dist = distance(p.x, p.y, currentParticle.x, currentParticle.y);
    if (dist < 100) {
      context.beginPath();
      context.moveTo(p.x, p.y);
      context.lineTo(currentParticle.x, currentParticle.y);
      context.stroke();
      context.closePath();
    }
  }
}

function animate() {
  context.fillStyle = "white";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);

  for (var i = 0; i < particles.length; i += 1) {
    var particle = particles[i];
    particle.x += particle.deltaX; // Delta X
    particle.y += particle.deltaY; // Delta Y

    if (particle.x > window.innerWidth) {
      particle.x = 0;
    }
    if (particle.x < 0) {
      particle.x = window.innerWidth;
    }
    if (particle.y > window.innerHeight) {
      particle.y = 0;
    }
    if (particle.y < 0) {
      particle.y = window.innerHeight;
    }

    drawNeighbourLines(particle);

    drawRectangle(
      particle.x,
      particle.y,
      particle.size,
      particle.size,
      particle.color
    );
  }
}

setInterval(animate, 1000 / 60);
