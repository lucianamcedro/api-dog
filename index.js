const express = require("express")
const app = express()
const dogs = require("./src/dogs/dogs.json")
const details = require("./src/dogs/details.json")
    

const port = process.env.PORT || 3333

app.get("/dogs", (req, res) => {
    return res.json(dogs)
})
app.get("/details", (req, res) => {
    return res.json(details)
})
app.listen(port, () => {
    console.log("Servidor está carregando...")
})