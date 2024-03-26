'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profile_categories.init({
    profile_id: DataTypes.INTEGER,
    categories_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'profile_categories',
    tableName: 'profile_categories'
  });
  return profile_categories;
};