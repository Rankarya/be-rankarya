const {tier} = require("../models");

module.exports = {
  getAllTier: async (req, res) => {
    try {
      const tiers = await tier.findAll();
      res.json({
        message: "Berhasil mendapatkan tier",
        data: tiers,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  createTier: async (req, res) => {
    let data = req.body;

    try {
      await tier.create({
        tier_name: data.tier_name,
        description: data.description,
        price: data.price,
      });

      res.status(201).json({
        message: "Berhasil membuat tier",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};
