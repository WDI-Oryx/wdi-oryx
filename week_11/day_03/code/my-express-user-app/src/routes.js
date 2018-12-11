const express = require("express");
const path = require("path");
const db = require("../models/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "..", "views"));

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.get("/", function(req, res) {
  res.render("pages/index");
});

app.get("/about", function(req, res) {
  res.render("pages/about");
});

app.get("/instruments/:name", function(req, res) {
  const { name } = req.params;
  res.render("pages/instrument", {
    name
  });
});

app.get("/users", function(req, res) {
  db.User.findAll().then(function(users) {
    res.render("users/index", {
      users: users
    });
  });
});

app.get("/users/new", function(req, res) {
  res.render("users/new");
});

app.get("/users/:id", function(req, res) {
  const { id } = req.params;
  db.User.findByPk(id).then(function(user) {
    res.render("users/show", {
      user
    });
  });
});

module.exports = app;
