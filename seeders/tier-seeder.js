module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tiers', [
      {
        tier_name: 'Basic',
        description: 'Basic tier description',
        price: 0.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tier_name: 'Standard',
        description: 'Standard tier description',
        price: 9.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tier_name: 'Premium',
        description: 'Premium tier description',
        price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Tambahkan data tambahan jika diperlukan
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tiers', null, {});
  }
};
