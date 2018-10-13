var path = document.querySelector("path");
var totalLength = path.getTotalLength();

function onMouseMove(event) {
  var clientX = event.clientX;
  var normalizedX = clientX / window.innerWidth;
  var targetLength = 1.0 - normalizedX * totalLength;
  path.style.strokeDashoffset = targetLength;
}

window.addEventListener("mousemove", onMouseMove);
