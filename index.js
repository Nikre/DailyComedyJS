const { application } = require("express")
const express = require("express")
const app = express()
const importData = require("./listVideoApiDEF.json")


let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/family", (req, res) => {
    res.send(importData)
})


app.listen(port, () => {
    console.log("App is listening on http://localhost:"+ port)
})