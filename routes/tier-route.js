const express = require("express");
const route = express.Router();
const { getAllTier, createTier, updateTierById } = require("../controllers/tier-controller");

route.get("/", getAllTier);
route.post("/", createTier)
route.put("/:id", updateTierById)

module.exports = route;
