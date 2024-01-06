const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h2>You are in Home route</h2>");
});

app.use((req, res, next) => [res.status(404).send("Bad URL !!!")]);
app.use((err, req, res, next) => [res.status(404).send("Something broke ...")]);

module.exports = app;
