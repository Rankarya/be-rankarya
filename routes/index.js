const express = require('express');
const route = express.Router()

const accountRoute = require('./account.route')

route.get("/", (req, res)=>{
    res.json("test 1 2 3...")
})

route.use("/accounts", accountRoute)

module.exports = route