const url = `${window.location.pathname}/comments`;

function getAllComments() {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(r => r.json())
    .then(function(data) {
      const ul = document.querySelector("ul");
      ul.innerHTML = "";
      for (let comment of data) {
        const li = `<li>${comment.body}</li>`;
        ul.innerHTML += li;
      }
    });
}

function displayComment(comment) {
  const ul = document.querySelector("ul");
  const li = `<li>${comment.body}</li>`;
  ul.innerHTML += li;
}

function addComment() {
  const params = {
    body: document.querySelector("input").value
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(params)
  })
    .then(r => r.json())
    .then(displayComment);
  // debugger;
  // POST
  // Content-Type: "json"
  // Accept: "json"
  // "/posts/:id/comments"
  // body -> HAS TO BE JSON.STRINGIFIED
  //    e.g. "{ body: "lkanalkn" }"
}

window.onload = function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    addComment();
  });

  getAllComments();
  setInterval(getAllComments, 3000);
};
