const express = require("express")

const app = express()

app.use(express.json())

app.use(require("./routes e schemas/products.routes"))

module.exports = app
