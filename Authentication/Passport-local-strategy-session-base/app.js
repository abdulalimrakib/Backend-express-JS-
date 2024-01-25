const express = require("express");
const ejs = require("ejs");
const cors = require("cors");
const app = express();

require("./config/database");
const router = require("./routes/routes");

app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/", router);

// app.use()

module.exports = app;
