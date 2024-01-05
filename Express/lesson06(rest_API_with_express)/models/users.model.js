const { v4: uuidv4 } = require("uuid");

const Users = [
  {
    id: uuidv4(),
    userName: "Abdul Alim Rakib",
    userEmail: "abdul@northsouth.edu",
  },
];

module.exports = Users;
