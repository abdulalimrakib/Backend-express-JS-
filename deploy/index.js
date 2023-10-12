require("dotenv").config();
const express = require("express");
// import { Express } from 'express'

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/github", (req, res) => {
  res.send("abdulalimrakib");
});

app.get("/login", (req, res) => {
  res.send("<h1>this is login page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>this is Youtube</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
