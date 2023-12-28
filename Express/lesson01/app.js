const express = require("express");
const app = express();

// app.(methodName)((route), ((req, res) funtion));

app.get("/", (req, res) => {
  res.send("I am get method from home route");
});

app.post("/", (req, res) => {
  res.send("I am a Post method from home route");
});

app.put("/", (req, res) => {
  res.send("I am a Put method from home route ");
});

app.delete("/", (req, res) => {
  res.send("I am a Delete method from home route");
});

// Note: we can see get methods in our UI

module.exports = app;
