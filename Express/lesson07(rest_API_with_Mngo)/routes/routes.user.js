const { getAllUsers, createUser, getOneUser } = require("../controllers/controllers.users")

const router = require("express").Router()

router.get("/", getAllUsers)
router.get("/:id", getOneUser)
router.post("/", createUser)

module.exports = router