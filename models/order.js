'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.Pet, {
        foreignKey: 'id',
        as: 'petId'
      })
    }
  };
  Order.init({
    // petId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    shipDate: DataTypes.STRING,
    status: DataTypes.ENUM('placed', 'approved', 'delivered'),
    complete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};