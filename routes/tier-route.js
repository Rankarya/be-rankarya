const express = require("express");
const route = express.Router();
const { getAllTier, createTier, updateTierById, getTierById } = require("../controllers/tier-controller");

route.get("/", getAllTier);
route.get("/:id", getTierById)
route.post("/", createTier)
route.put("/:id", updateTierById)

module.exports = route;
