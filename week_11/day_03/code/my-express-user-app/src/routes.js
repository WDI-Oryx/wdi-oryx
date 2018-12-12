const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("../models/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "..", "views"));

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
      users
    });
  });
});

app.get("/users/new", function(req, res) {
  res.render("users/new");
});

app.post("/users", function(req, res) {
  const { firstName, lastName, email } = req.body;
  db.User.create({
    firstName,
    lastName,
    email
  }).then(function(user) {
    res.redirect(`/users/${user.id}`);
  });
});

app.get("/users/:id", function(req, res) {
  const { id } = req.params;
  db.User.findByPk(id).then(function(user) {
    res.render("users/show", {
      user
    });
  });
});

app.post("/users/:id/delete", function(req, res) {
  const { id } = req.params;
  db.User.findByPk(id).then(function(user) {
    user.destroy({ force: true }).then(function() {
      res.redirect("/users");
    });
  });
});

app.get("/users/:id/edit", function(req, res) {
  const { id } = req.params;
  db.User.findByPk(id).then(function(user) {
    res.render("users/edit", {
      user
    });
  });
});

app.post("/users/:id", function(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  db.User.update(
    {
      firstName: firstName,
      lastName: lastName,
      email: email
    },
    {
      where: { id: id }
    }
  ).then(function() {
    res.redirect(`/users/${id}`);
  });
});

module.exports = app;
