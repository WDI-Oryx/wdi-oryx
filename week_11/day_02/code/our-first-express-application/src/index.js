const path = require("path");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "..", "views"));
app.use(express.static(path.resolve(__dirname, "..", "public")));

app.get("/", function(request, response) {
  response.render("pages/index");
});

app.get("/home", function(req, res) {
  res.send("GET Request to /home");
});

app.get("/about", function(req, res) {
  res.render("pages/about");
});

app.get("/contact", function(req, res) {
  res.send("<h1>Contact Page was reached</h1>");
});

app.get("/hello/:name", function(req, res) {
  const { name } = req.params;
  res.render("pages/hello", {
    name: name
  });
});

app.get("/colors/:color", function(req, res) {
  const { color } = req.params;
  res.render("pages/color", {
    color: color
  });
});

app.get("/json", function(req, res) {
  const user = { name: "Jacques", age: 42 };
  res.json(user);
});

app.listen(3000, function() {
  console.log("Open up localhost:3000");
});
