"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GradeLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GradeLevel.hasMany(models.ClassRoom, {
        foreignKey: "GradeLevelId",
      });

      GradeLevel.hasMany(models.Subject, {
        foreignKey: "GradeLevelId",
      });

      GradeLevel.hasMany(models.Student, {
        foreignKey: "GradeLevelId",
      });

      GradeLevel.hasMany(models.Score, {
        foreignKey: "GradeLevelId",
      });
    }
  }
  GradeLevel.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "GradeLevel",
    }
  );
  return GradeLevel;
};
