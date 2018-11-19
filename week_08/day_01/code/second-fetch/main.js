// Anytime I work with an API, I need to answer the following questions:

// URL?
const baseURL = "https://randomuser.me/api/";

// Method?
const method = "GET";

// Data Type?
const dataType = "application/json";

const httpOptions = {
  method: method
};

function turnResponseIntoObject(response) {
  return response.json();
}

function displayData(data) {
  const outputDiv = document.querySelector("#output");
  outputDiv.innerHTML = "";

  for (let person of data.results) {
    const html = `
      <h2>${person.name.first} ${person.name.last}</h2>
      <img src="${person.picture.medium}">
      <p>Email: ${person.email}</p>
    `;
    outputDiv.innerHTML += html;
  }
}

function fetchNewUser() {
  const numInput = document.querySelector("input");
  const val = numInput.value;

  const genderSelect = document.querySelector("select");
  const gender = genderSelect.value;

  const params = `?results=${val}&gender=${gender}`;
  fetch(baseURL + params, httpOptions)
    .then(turnResponseIntoObject)
    .then(displayData);
}

const button = document.querySelector("button");
button.addEventListener("click", fetchNewUser);
