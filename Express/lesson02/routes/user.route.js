const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("I am from Login Page");
});

router.get("/register", (req, res) => {
  res.send("<h2>I am from Register Page</h2>");
});

module.exports = router;
