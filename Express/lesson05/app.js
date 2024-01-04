const express = require("express");
const path = require("path");
const route = require("./routes/user.route");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./htmlFile/index.html"));
});

app.use(route);

app.get("*", (req, res) => {
  res.send("<h2>Wrong URL!!</h2>");
});

module.exports = app;
