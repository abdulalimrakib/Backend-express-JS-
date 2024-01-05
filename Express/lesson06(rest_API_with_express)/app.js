const express = require("express");
const path = require("path")
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users.routes");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.use("/users", userRouter);

app.use((req, res, next) => {
  res.status(404).send("bad url ....");
});

app.use((err, req, res, next) => {
  res.status(500).send("something broke ...");
});

module.exports = app;
