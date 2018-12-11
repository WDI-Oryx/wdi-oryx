const express = require("express");
const path = require("path");
const db = require("../models/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "..", "views"));

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.get("/", function(req, res) {
  res.render("pages/home");
});

app.get("/todos", function(req, res) {
  db.Todo.findAll().then(todos => {
    res.render("todos/index", {
      todos: todos
    });
  });
});

module.exports = app;
