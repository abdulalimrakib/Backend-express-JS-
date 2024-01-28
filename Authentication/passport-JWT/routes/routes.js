require("dotenv").config();

const router = require("express").Router();
const passport = require("passport");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const User = require("../models/user.models");

// login route
router.get("/login", (req, res) => {
  res.status(200).send("<h1>Login page</h1>");
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "User not found",
      });
    }
    const isMatchPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isMatchPassword) {
      return res.status(200).send({
        success: false,
        message: "Wrong password",
      });
    }

    const payload = {
      id: user._id,
      name: user.name,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "2 days",
    });
    res.status(200).send({
      success: true,
      message: "Successfully loggedin",
      token: "Bearer " + token,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Login faild",
      error: error.message,
    });
  }
});

// register route
router.get("/register", (req, res) => {
  res.status(200).send("<h1>Register page</h1>");
});

router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(201).send("User exist");
    } else {
      const hash = await bcrypt.hash(req.body.password, saltRounds);

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });

      await newUser.save();
      res.status(200).send({
        success: true,
        message: "User successfully registered",
      });
    }
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "User can't register",
      error: error.message,
    });
  }
});

// protected route
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    res.status(200).send({
      success: true,
      user: {
        id: req.user._id,
        name: req.user.name,
      },
    });
  }
);

module.exports = router;
