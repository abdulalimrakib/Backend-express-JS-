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

app.post("/products", async(req, res) => {
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

app.use((req, res, next) => [res.status(404).send("Bad URL !!!")]);
app.use((err, req, res, next) => [res.status(404).send("Something broke ...")]);

module.exports = app;
