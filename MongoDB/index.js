const app = require("./app");
const mongoose = require("mongoose");

const DBcannect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Products");
    console.log("Connected!");
  } catch (error) {
    console.log("Not Connected !!");
  }
};

//Mongoose Schema


const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Your server is running at http://localhost:${PORT}`);
  await DBcannect();
});
