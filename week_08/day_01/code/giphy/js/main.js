const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");

const apiKey = "dc6zaTOxFJmzC";
const method = "GET";
const baseURL = "https://api.giphy.com";
const path = "/v1/gifs/random";
const params = `?api_key=${apiKey}&rating=g`;
const url = baseURL + path + params;
const httpOptions = {
  method: method
};

function getTrendingGifs() {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=5`;
  fetch(url)
    .then(turnResponseIntoObject)
    .then(data => {
      for (let gif of data.data) {
        const html = `<img src="${gif.images.original.url}">`;
        document.querySelector("#app").innerHTML += html;
      }
    });
}

getTrendingGifs();

function turnResponseIntoObject(response) {
  return response.json();
}

function displayData(info) {
  const html = `
    <h2>Here is your Gif</h2>
    <img src="${info.data.image_url}">
  `;
  container.innerHTML = html;
}

function getGif(searchTerm) {
  container.innerHTML = "<h2>Loading...</h2>";
  fetch(url + `&tag=${searchTerm}`, httpOptions)
    .then(turnResponseIntoObject)
    .then(displayData);
}

form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  getGif(input.value);
});
