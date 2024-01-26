const express = require("express");
const ejs = require("ejs");
const cors = require("cors");
const app = express();
const router = require("./routes/routes");
require("./config/database");
require("./config/passport");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
      collectionName: "sessions",
    }),
    // cookie: { secure: true }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/", router);

module.exports = app;
