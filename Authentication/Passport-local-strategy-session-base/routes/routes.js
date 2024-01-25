const router = require("express").Router();
const user = require("../models/models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// register : get
router.get("/register", (req, res) => {
  res.render("register");
});

// register : post
router.post("/register", async (req, res) => {
  try {
    const name = req.body.userName;
    const email = req.body.userEmail;
    const password = req.body.password;

    const existUser = await user.findOne({ name: name });
    if (existUser) {
      return await res.status(500).send("User name is exist");
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        const newUser = await new user({
          name,
          email,
          password: hash,
        });
        await newUser.save();
        res.redirect("/login");
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// login : get
router.get("/login", (req, res) => {
  res.render("login");
});

// login : post
router.post("/login", (req, res) => {
  try {
    res.status(201).send("post register");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// profile protected : get
router.get("/profile", (req, res) => {
  res.render("profile");
});

// logout route
router.get("/logout", (req, res) => {
  res.redirect("/");
});

module.exports = router;
