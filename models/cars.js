'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cars.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    size_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cars',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return cars;
};