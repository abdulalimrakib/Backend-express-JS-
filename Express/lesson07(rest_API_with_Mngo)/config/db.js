const mongoose = require("mongoose");
const config = require("./config");

const URL = config.db.url;

mongoose
  .connect(URL)
  .then(() => console.log("Database Connected"))
  .catch((error) => {
    console.log("Database not connected");
    process.exit(1);
  });
