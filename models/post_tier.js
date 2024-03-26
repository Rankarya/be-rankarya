'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_tier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post_tier.init({
    post_id: DataTypes.INTEGER,
    tier_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post_tier',
    tableName: 'post_tiers'
  });
  return post_tier;
};