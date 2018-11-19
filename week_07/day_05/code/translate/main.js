function displayData(words) {
  const output = document.querySelector("#output");
  output.innerHTML = `<p>${words}</p>`;
  // document.body.style.backgroundColor = words;
}

function onButtonClick() {
  const recognition = new webkitSpeechRecognition();

  const dropdown = document.querySelector("select");
  const language = dropdown.value;
  recognition.lang = language;

  recognition.onresult = function(data) {
    const words = data.results[0][0].transcript;
    displayData(words);
  };
  recognition.start();
}

const button = document.querySelector(".record");

button.addEventListener("click", onButtonClick);
