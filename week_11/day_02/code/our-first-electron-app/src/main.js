const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

app.on("ready", function() {
  const window = new BrowserWindow({
    width: 800,
    height: 600
  });

  window.loadURL(
    url.format({
      pathname: path.resolve(__dirname, "presentation", "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
});
