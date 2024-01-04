const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/circle", (req, res) => {
  res.sendFile(path.join(__dirname, "../htmlFile/circle.html"));
});

router.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * Math.pow(radius, 2);

  res.send(`Circle Area = ${area.toFixed(2)}`);
});

router.get("/rectangle", (req, res) => {
  res.sendFile(path.join(__dirname, "../htmlFile/rectangular.html"));
});

router.post("/rectangle", (req, res) => {
  const length = req.body.length;
  const width = req.body.width;
  const area = length * width;

  res.send(`Rectangle Area = ${area.toFixed(2)}`);
});

module.exports = router;
