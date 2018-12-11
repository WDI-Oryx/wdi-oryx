const app = require("./routes");

const port = 3000;

app.listen(port, function() {
  console.log(`The server is now running. Please open localhost:${port}`);
});
