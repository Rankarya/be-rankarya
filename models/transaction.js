'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaction.init({
    account_id: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    total_payment: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};