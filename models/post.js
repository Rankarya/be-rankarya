'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post.init({
    account_id: DataTypes.INTEGER,
    tier_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    media: DataTypes.STRING,
    post_status: DataTypes.STRING,
    published_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};