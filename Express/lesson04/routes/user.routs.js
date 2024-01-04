const path = require("path");
var bodyParser = require("body-parser");
const express = require("express");
const route = express.Router();
route.use(bodyParser.urlencoded({ extended: false }));

route.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../form.html"));
});

route.post("/register", (req, res) => {
  const name = req.body.name;
  res.send(`your name is ${name}`);
});

module.exports = route;
