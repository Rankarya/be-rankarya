'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post_favorites.init({
    post_id: DataTypes.INTEGER,
    account_id: DataTypes.INTEGER,
    favorited_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'post_favorites',
  });
  return post_favorites;
};