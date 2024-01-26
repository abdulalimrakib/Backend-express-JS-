const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/models");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      // Find user by email
      const user = await User.findOne({ email: username });
      if (!user) {
        return done(null, false, { message: "Incorrect email." });
      }

      // Compare passwords
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password." });
      }

      // If everything is correct, return the user
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});
