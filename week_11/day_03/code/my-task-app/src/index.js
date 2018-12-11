const app = require("./routes");

const port = 3000;

app.listen(port, function() {
  console.log(`A new server is running on localhost:${port}`);
});
