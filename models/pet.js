'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pet.belongsTo(models.Category, {
        foreignKey: 'id',
        as: 'categoryId'
      });
      Pet.hasMany(models.Tag, {
        foreignKey: 'id',
        as: 'tags'
      });
    }
  };
  Pet.init({
    name: DataTypes.STRING,
    // categoryId: DataTypes.INTEGER,
    photoUrls: DataTypes.ARRAY(DataTypes.STRING),
    // tags: DataTypes.ARRAY(DataTypes.INTEGER),
    status: DataTypes.ENUM('available', 'pending', 'sold')
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};