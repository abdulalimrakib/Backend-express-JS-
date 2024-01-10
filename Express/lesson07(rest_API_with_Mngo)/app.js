require("./config/db")
const express = require("express")
const cors = require("cors")

const app = express()
const router = require("./routes/routes.user")


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/users", router)

app.get("/", (req, res) => {
    res.status(200).send("You are in Home route")
})

app.use((req, res, next) =>{
    res.status(404).send("Bad URL !!!")
})
app.use((err, req, res, next) =>{
    res.status(500).send("Something broke ...")
})

module.exports = app;