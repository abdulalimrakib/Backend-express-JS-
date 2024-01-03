const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is Home Route</h1>");
});
app.get("*", (req, res) => {
  res.send("<h1>Page Not Found</h1>");
});

module.exports = app;
