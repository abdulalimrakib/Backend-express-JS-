const express = require("express")
const app = express()

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