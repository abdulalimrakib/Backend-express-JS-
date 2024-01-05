let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

const postAnUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    userName: req.body.userName,
    userEmail: req.body.userEmail,
  };
  users.push(newUser);
  res.status(201).json({ users });
};

const updateAnUser = (req, res) => {
  const userId = req.params.id;
  const { userName, userEmail } = req.body;
  users
    .filter((user) => {
      return user.id === userId;
    })
    .map((selectedUser) => {
      selectedUser.userName = userName;
      selectedUser.userEmail = userEmail;
    });

  res.status(300).json({ users });
};

const deletAnUser = (req, res) => {
  const userId = req.params.id;

  users = users.filter((user) => user.id !== userId);
  res.status(301).json( users );
};

module.exports = { getAllUsers, postAnUser, updateAnUser, deletAnUser };
