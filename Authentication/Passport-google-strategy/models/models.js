const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User
