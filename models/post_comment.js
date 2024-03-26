'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post_comment.init({
    post_id: DataTypes.INTEGER,
    account_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    commented_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'post_comment',
    tableName: 'post_comments'
  });
  return post_comment;
};