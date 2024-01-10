const users = require("../models/model.users");

const getAllUsers = async (req, res) => {
  try {
    const allData = await users.find();
    res.status(200).send(allData);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await users.findOne({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await users.findOne(
      { _id: id },
      {
        $set: {
            
        },
      }
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await users.findOne({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new users({
      name: req.body.name,
      age: req.body.age,
    });

    const addedUser = newUser.save();
    res.status(201).send(addedUser);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { getAllUsers, getOneUser, createUser };
