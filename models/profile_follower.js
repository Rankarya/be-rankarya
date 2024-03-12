'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile_follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profile_follower.init({
    artis_id: DataTypes.INTEGER,
    follower_id: DataTypes.INTEGER,
    followed_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'profile_follower',
  });
  return profile_follower;
};