'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile_statistics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profile_statistics.init({
    account_id: DataTypes.INTEGER,
    view_count: DataTypes.INTEGER,
    follower_count: DataTypes.INTEGER,
    subscribed_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'profile_statistics',
    tableName: 'profile_statistics'
  });
  return profile_statistics;
};