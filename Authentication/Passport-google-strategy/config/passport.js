require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/models");
const bcrypt = require("bcrypt");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3003/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        const user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // If the user doesn't exist, create a new one
          console.log(profile.emails[0].value);
          const newUser = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value, // Assuming email is an array and you want the first one
          });

          user = await newUser.save();
        }

        return cb(null, user);
      } catch (error) {
        return cb(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user); // Even if user is null, it's handled by Passport
  } catch (error) {
    done(error, null);
  }
});
