const express = require("express")
const route = express.Router()
const tierRoute = require('./tier-route')

route.use("/tier", tierRoute)

module.exports = route