const express = require("express")
const route = express.Router()
const tierRoute = require('./tier-route')
const questionRoute = require('./question-route')

route.use("/tier", tierRoute)
route.use("/question", questionRoute)

module.exports = route