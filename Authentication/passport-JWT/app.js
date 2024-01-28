require("./config/database")
require("./config/passport")

const express = require("express");
const cors = require("cors");
const passport = require("passport");

const app = express();
const router = require("./routes/routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

//home route
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

// all routes
app.use("/", router);

// error
app.use((req, res, next) => {
  res.status(404).send("Wrong URL");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
