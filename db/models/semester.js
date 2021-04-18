"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Semester extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Semester.hasMany(models.Student, {
        foreignKey: "SemesterId",
      });

      Semester.hasMany(models.Score, {
        foreignKey: "SemesterId",
      });
    }
  }
  Semester.init(
    {
      value: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Semester",
    }
  );
  return Semester;
};
