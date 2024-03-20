const express = require('express');
const { getAllAccount } = require('../controllers/account.controller');

const route = express.Router()

route.get("/", getAllAccount)
// route.get("/")
// route.get("/")

module.exports = route