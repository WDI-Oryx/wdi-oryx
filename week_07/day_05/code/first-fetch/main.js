const apiURL = "http://api.open-notify.org/astros";
const method = "GET";
const dataType = "JSON";

function turnResponseIntoObject(response) {
  return response.json();
}

function displayAstronauts(data) {
  const people = data.people;
  for (let i = 0; i < people.length; i += 1) {
    const person = people[i];
    document.body.innerHTML += person.name;
  }
}

fetch(apiURL)
  .then(turnResponseIntoObject)
  .then(displayAstronauts);
