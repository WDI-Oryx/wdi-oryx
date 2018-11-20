// GET /todos, asking for JSON with no body/params

function responseToJSON(response) {
  return response.json();
}

function displayAllTodos(data) {
  const listItems = data
    .map(function(todo) {
      return `
        <li id="todo-${todo.id}" class="${todo.completed ? "complete" : ""}">
          ${todo.content}
        </li>
      `;
    })
    .join("");
  const allTodosDiv = document.querySelector("#all-todos");
  allTodosDiv.innerHTML = `<ul>${listItems}</ul>`;
}

function getAllTodos() {
  fetch("/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(responseToJSON)
    .then(displayAllTodos);
}

function getTodo(id) {
  fetch(`/todos/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(responseToJSON)
    .then(function(data) {
      const showTodoDiv = document.querySelector("#show-todo");
      const html = `
        <h2>Todo ${data.id}</h2>
        <p>${data.content}</p>
        <p>Completed: ${data.completed}</p>
        <p>Created at: ${data.created_at}</p>
      `;
      showTodoDiv.innerHTML = html;
    });
}

function addNewTodo(content) {
  // When I make an AJAX request:
  // There are two places that data types pop up
  //
  // 1. What data is JS sending? ("Content-Type")
  // 2. What data is Ruby sending back? ("Accept")
  const params = {
    content: content
  };
  fetch("/todos", {
    method: "POST",
    headers: {
      // Content-Type is what format the data you are providing is in (JSON)
      "Content-Type": "application/json",
      // Accept is what format the data you are receiving is in (JSON)
      Accept: "application/json"
    },
    body: JSON.stringify(params)
  })
    .then(responseToJSON)
    .then(todo => {
      const html = `
        <li id="todo-${todo.id}" class="${todo.completed ? "complete" : ""}">
          ${todo.content}
        </li>
      `;
      const ul = document.querySelector("ul");
      ul.innerHTML += html;
    });
}

function toggleTodo(id) {
  fetch(`/todos/${id}/toggle`, {
    method: "PUT"
  })
    .then(r => r.json())
    .then(function(data) {
      console.log(data);
    });
}

// Wait until the page has finished loading before making AJAX requests
window.onload = function() {
  getAllTodos();

  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const input = document.querySelector("#new-todo");
    const content = input.value;
    addNewTodo(content);
  });

  const allTodosDiv = document.querySelector("#all-todos");
  allTodosDiv.addEventListener("click", function(e) {
    const clickedLi = e.target;
    clickedLi.classList.toggle("complete");
    const id = clickedLi.id.replace("todo-", "");
    getTodo(id);
    toggleTodo(id);
  });

  setInterval(getAllTodos, 3000);
};
