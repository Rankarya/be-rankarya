const { tier } = require("../models");

module.exports = {
  getAllTier: async (req, res) => {
    try {
      const tiers = await tier.findAll();
      if (tiers.length === 0) {
        return res.status(404).json({
          message: "Tidak ada tier yang ditemukan",
          data: [],
        });
      }

      return res.status(200).json({
        message: "Berhasil mendapatkan tier",
        data: tiers,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message: "Gagal memuat tier",
        error: error.message,
      });
    }
  },

  getTierById: async (req, res) => {
    const tierId = req.params.id; 

    try {
      const foundTier = await tier.findByPk(tierId);

      if (!foundTier) {
        return res.status(404).json({
          message: "Tier tidak ditemukan",
        });
      }

      return res.status(200).json({
        message: "Berhasil mendapatkan tier",
        data: foundTier,
      });
    } catch (error) {
      console.error(error);
     
      return res.status(500).json({
        message: "Gagal mendapatkan tier",
        error: error.message, 
      });
    }
  },

  createTier: async (req, res) => {
    let data = req.body;

    try {
      const newTier = await tier.create({
        tier_name: data.tier_name,
        description: data.description,
        price: data.price,
      });

      return res.status(200).json({
        message: "Berhasil membuat tier",
        data: newTier,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message: "Gagal membuat tier",
        error: error.message,
      });
    }
  },

  updateTierById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      if (!data) {
        return res.status(404).json({
          message: "Tier tidak ditemukan",
        });
      }

      await tier.update(
        {
          tier_name: data.tier_name,
          description: data.description,
          price: data.price,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).json({
        message: "Berhasil memperbarui tier",
        data: data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};
