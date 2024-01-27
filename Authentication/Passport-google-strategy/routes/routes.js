const router = require("express").Router();
const User = require("../models/models");
const passport = require("passport");
require("../config/passport");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// register : get
router.get("/register", (req, res) => {
  res.render("register");
});

// register : post
router.post("/register", async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const existUser = await User.findOne({ name: name });
    if (existUser) {
      return res.status(500).send("User name already exists");
    }
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      name: name,
      email: username,
      password: hash,
    });
    await newUser.save();
    res.redirect("/login");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// login : get
const stilLogedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect("/profile");
  }
  next();
};

router.get("/login", stilLogedIn, (req, res) => {
  res.render("login");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", 'email'] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/profile",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

// profile protected : get
const isLogedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect("/login");
  }
  next();
};

router.get("/profile", isLogedIn, (req, res) => {
  res.render("profile", {username: req.user.name});
});

// logout route
router.get("/logout", (req, res) => {
  try {
    req.logout((error) => {
      if (error) return next(error);
      else res.redirect("/login");
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
