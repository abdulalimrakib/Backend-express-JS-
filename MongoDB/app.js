const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Product = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Mongoose Model
const Products = mongoose.model("Products", Product);

app.get("/", (req, res) => {
  res.status(200).send("<h2>You are in Home route</h2>");
});

// Data Posting
app.post("/products", async (req, res) => {
  try {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;

    const newProduct = new Products({
      name,
      price,
      description,
    });

    const productData = await newProduct.save();
    res.status(201).send(productData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Data Getting
app.get("/products", async (req, res) => {
  try {
    const allProducts = await Products.find(); // full data
    res.status(200).send(allProducts);
  } catch (error) {
    res.status(404).res({ message: error.message });
  }
});

// $lt less then
// $gt grater then
// $eq equal
// $ne not equal
// $gte grater then equal
// $lte less then equal
// $in 
// $nin

// $or
// $and

// find().countDocuments()                 count the nimber of all documents
// find().sort({/.../: 1 or -1})           1 for ascending & -1 for descending 
// find().countDocuments()                 count the nimber of all documents

// selete({/.../})                         which value i want to send {1 for true & 0 for false}


app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Products.findOne({ _id: id },{name:1, _id:0}); // id base single product
    if (product) {
      res.status(200).send(product);
    }
  } catch (error) {
    res.status(404).res({ message: error.message });
  }
});

app.use((req, res, next) => [res.status(404).send("Bad URL !!!")]);
app.use((err, req, res, next) => [res.status(404).send("Something broke ...")]);

module.exports = app;
