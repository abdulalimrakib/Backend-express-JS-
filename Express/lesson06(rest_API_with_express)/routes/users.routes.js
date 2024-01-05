const router = require("express").Router();
const { getAllUsers, postAnUser, updateAnUser, deletAnUser } = require("../controllers/users.controllers");

router.get("/", getAllUsers);
router.post("/", postAnUser)
router.put("/:id", updateAnUser)
router.delete("/:id", deletAnUser)

module.exports = router;
