const {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/controllers.users");

const router = require("express").Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
