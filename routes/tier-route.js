const express = require("express");
const route = express.Router();
const { getAllTier, createTier } = require("../controllers/tier-controller");

route.get("/", getAllTier);
route.post("/", createTier)

module.exports = route;
