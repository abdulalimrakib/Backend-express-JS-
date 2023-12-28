const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");


app.use("/", (req, res) => {
    res.send("Hello what's up !!!!");
  });

app.use(userRouter);

app.get("*", (req, res) => {
  res.send("404!! page not found");
});

module.exports = app;
