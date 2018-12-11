const express = require("express");
const path = require("path");

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

// We are creating a CRUD system with Node
// We are trying to be RESTful (resources)

app.get("/users", function(req, res) {
  // Get all of the users out of the db
  res.render("users/index");
});

module.exports = app;
