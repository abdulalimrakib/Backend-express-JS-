const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //   const id = req.query.id;
  //   const name = req.query.name;
  const { id, name } = req.query;
  res.send(`<h1>This Is Home Route and Query id: ${id} name: ${name}</h1>`);
});
app.get("*", (req, res) => {
  res.send("<h1>Page not Found</h1>");
});

module.exports = app;


// request with query parameter = req.query.parametrName
// request with route parameter = req.params.parametrName
// request with headers = req.header("key")
