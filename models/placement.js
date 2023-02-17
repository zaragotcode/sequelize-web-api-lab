'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Placement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Placement.belongsTo(models.Producer, {
        foreignKey: 'producerId'
      })
    }
  }
  Placement.init({
    title: DataTypes.STRING,
    genre: {
      type: DataTypes.ENUM('Hip-Hop/Rap', 'R&B', 'Pop'),
      defaultValue: 'Hip-Hop/Rap',
    },
    producerId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Producers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Placement',
  });
  return Placement;
};